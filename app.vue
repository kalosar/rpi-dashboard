<template>
    <div class="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div class="flex flex-col space-y-4 dark:bg-gray-800 p-4 rounded">
            <h1 class="text-3xl text-gray-700 dark:text-gray-300 font-bold py-3">Bergkrystallen</h1>
            <Departure v-for="departure in departures" :key="departure.id" :name="departure.frontText"
                :line="departure.lineId" :transportMode="departure.transportMode"
                :departureTime="departure.expectedDepartureTime" />
        </div>
    </div>
</template>

<script setup lang="ts">

interface StopPlaceResponse {
    stopPlace: StopPlace;
}

interface StopPlace {
    id: string;
    estimatedCalls: EstimatedCall[];
}

interface EstimatedCall {
    realtime: boolean;
    aimedDepartureTime: string;
    expectedDepartureTime: string;
    actualDepartureTime: string | null; // Using string | null to reflect the potential null value
    date: string;
    destinationDisplay: DestinationDisplay;
    serviceJourney: ServiceJourney;
    cancellation: boolean;
    realtimeState: string;
}

interface DestinationDisplay {
    frontText: string;
}

interface ServiceJourney {
    line: Line;
}

interface Line {
    name: string;
    publicCode: string;
    transportMode: string;
    id: string;
    description: string | null; // Using string | null to reflect the potential null value
}

// Updated simplified structure with a more suitable name
interface Departure {
    id: string; // Assuming this refers to stopPlaceId, could be prefixed if needed
    realtime: boolean;
    aimedDepartureTime: string;
    expectedDepartureTime: string;
    actualDepartureTime: string | null;
    date: string;
    frontText: string; // From DestinationDisplay
    name: string; // From Line, considering it as lineName for clarity
    publicCode: string;
    transportMode: string;
    lineId: string; // To avoid conflict with stopPlaceId
    description: string | null;
    cancellation: boolean;
    realtimeState: string;
}

// The updated mapping function to handle multiple departures
function mapToDepartures(response: StopPlaceResponse): Departure[] {
    const { stopPlace } = response;
    return stopPlace.estimatedCalls.map((estimatedCall) => ({
        id: stopPlace.id,
        realtime: estimatedCall.realtime,
        aimedDepartureTime: estimatedCall.aimedDepartureTime,
        expectedDepartureTime: estimatedCall.expectedDepartureTime,
        actualDepartureTime: estimatedCall.actualDepartureTime,
        date: estimatedCall.date,
        frontText: estimatedCall.destinationDisplay.frontText,
        name: estimatedCall.serviceJourney.line.name,
        publicCode: estimatedCall.serviceJourney.line.publicCode,
        transportMode: estimatedCall.serviceJourney.line.transportMode,
        lineId: estimatedCall.serviceJourney.line.id,
        description: estimatedCall.serviceJourney.line.description,
        cancellation: estimatedCall.cancellation,
        realtimeState: estimatedCall.realtimeState,
    }));
}

const departures = computed((): Departure[] => {
    if (data.stopPlace) {
        return mapToDepartures(data);
    }
    return [];
});

// Example query, adjust according to your GraphQL schema
const GET_DEPARTURES = gql`
  query getDepartures {
  stopPlace(id: "NSR:StopPlace:58243") {
    id
    estimatedCalls(numberOfDepartures: 5, includeCancelledTrips: true) {
      realtime
      aimedDepartureTime
      expectedDepartureTime
      actualDepartureTime
      date
      destinationDisplay {
        frontText
      }
      serviceJourney {
        line {
          name
          publicCode
          transportMode
          id
          description
        }
      }
      cancellation
      realtimeState
    }
  }
}
`

const { data } = await useAsyncQuery(GET_DEPARTURES) as { data: StopPlaceResponse };

</script>
