<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="flex flex-col space-y-4 dark:bg-gray-800 p-4 rounded">
      <h1 class="text-3xl text-gray-700 dark:text-gray-300 font-bold py-3">Bergkrystallen</h1>
      <div v-for="departure in data?.stopPlace?.estimatedCalls" :key="departure.serviceJourney.line.id"
           class="p-3 rounded-lg shadow-md bg-white dark:bg-gray-700">
        <div class="flex items-center space-x-2">
          <!-- Wrapper for SVG and public code -->
          <div class="flex items-center space-x-1 rounded p-1" :class="getTransportModeClass(departure.serviceJourney.line.transportMode)">
            <!-- SVG icon -->
            <!-- Metro Icon -->
            <svg v-show="departure.serviceJourney.line.transportMode == 'metro'" id="subway" xmlns="http://www.w3.org/2000/svg" x="0px"
                 y="0px" width="16px" height="16px" viewBox="0 0 16 16" xml:space="preserve"
                 class="fill-current text-white">
              <polygon fill-rule="evenodd" clip-rule="evenodd"
                       points="5.0040736,5 5.0040736,6.1663184 7.4164491,6.1663184 7.4164491,12 8.5835505,12 8.5835505,6.1663184 10.9991369,6.1663184 10.9991369,5 "/>
              <path
                  d="M7.9994302,2C11.3081598,2,14,4.6915898,14,8s-2.6918402,6-6.0005698,6C4.69133,14,2,11.3084097,2,8 S4.69133,2,7.9994302,2 M7.9994302,1C4.1398902,1,1,4.14078,1,8s3.1398902,7,6.9994302,7C11.8601103,15,15,11.8592196,15,8 S11.8601103,1,7.9994302,1L7.9994302,1z"/>
            </svg>

            <!-- Bus Icon -->
            <svg v-show="departure.serviceJourney.line.transportMode == 'bus'" id="bus" class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px"
                 width="16px" height="16px" viewBox="0 0 16 16" xml:space="preserve">
<g>
	<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5,11.7995834c0-0.5506039,0.4483328-0.9995832,1-0.9995832
		s1,0.4489794,1,0.9995832c0,0.5522699-0.4483328,1.0004168-1,1.0004168S10.5,12.3518534,10.5,11.7995834z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9956055,9.5947266l-0.6999512-4.2958984
		C14.2667236,5.1270142,14.1223755,5,13.9500122,5h-12.25C1.3491211,5,1,5.3579102,1,5.7167358v3.8535767v0.2433472v0.8283691
		c0,0.1781006,0.1277466,0.3579102,0.3001099,0.3579102h1.5473022c0.2359009-0.7186279,0.9055786-1.1999388,1.703064-1.1999388
		S6.0175781,10.281311,6.253479,10.999939h3.5435181C10.0328979,10.281311,10.7025146,9.8000002,11.5,9.8000002
		s1.4671021,0.4813108,1.7030029,1.1999388h1.4470215C14.8425293,10.999939,15,10.8389282,15,10.6420288V9.8136597V9.6537476
		C15,9.6340942,14.99823,9.6143799,14.9956055,9.5947266z M12.1564331,6.7895508
		c0-0.1977539,0.1574707-0.3579102,0.3499756-0.3579102h1.086792c0.1766968,0,0.324585,0.1333008,0.3464966,0.3114014
		l0.1854858,1.4316406c0.0131226,0.1029053-0.0175171,0.204895-0.0848999,0.2827759
		c-0.0656128,0.0778198-0.1618652,0.1216431-0.2625122,0.1216431h-1.2713623c-0.1925049,0-0.3499756-0.1601562-0.3499756-0.3579102
		V6.7895508z M7.9564209,6.7895508c0-0.1977539,0.1566162-0.3579102,0.3499756-0.3579102h2.8000488
		c0.1925049,0,0.3499756,0.1601562,0.3499756,0.3579102v1.4316406c0,0.1977539-0.1574707,0.3579102-0.3499756,0.3579102H8.3063965
		c-0.1933594,0-0.3499756-0.1601562-0.3499756-0.3579102V6.7895508z M3.7564087,6.7895508
		c0-0.1977539,0.1566162-0.3579102,0.3500366-0.3579102h2.7999878c0.1933594,0,0.3508911,0.1601562,0.3508911,0.3579102v1.4316406
		c0,0.1977539-0.1575317,0.3579102-0.3508911,0.3579102H4.1064453c-0.1934204,0-0.3500366-0.1601562-0.3500366-0.3579102V6.7895508z
		 M1.6564331,6.7895508c0-0.1977539,0.1574707-0.3579102,0.3499756-0.3579102h0.7008667
		c0.1925049,0,0.3482666,0.1601562,0.3482666,0.3579102v1.4316406c0,0.1977539-0.1557617,0.3579102-0.3482666,0.3579102H2.0064087
		c-0.1925049,0-0.3499756-0.1601562-0.3499756-0.3579102V6.7895508z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5504456,11.7995834
		c0-0.5506039,0.448333-0.9995832,1-0.9995832s1,0.4489794,1,0.9995832c0,0.5522699-0.4483333,1.0004168-1,1.0004168
		S3.5504456,12.3518534,3.5504456,11.7995834z"/>
</g>
</svg>
            <!-- Public code -->
            <div class="text-white text-sm font-semibold">
              {{ departure.serviceJourney.line.publicCode }}
            </div>
          </div>
          <!-- Front text -->
          <div class="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {{ departure.destinationDisplay.frontText }}
          </div>
        </div>
        <!-- Departure time -->
        <div class="flex justify-between text-gray-700 dark:text-gray-300 pt-3">
          <span class="font-bold">{{ formatExactTime(departure.expectedDepartureTime) }}</span>
          <span class="italic">{{ formatRelativeTime(departure.expectedDepartureTime) }}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {formatDistanceToNow, parseISO, format} from 'date-fns';

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

const formatExactTime = (time: string): string => {
  const targetTime = parseISO(time);
  return format(targetTime, 'HH:mm'); // Returns time as '23:40'
};

const formatRelativeTime = (time: string): string => {
  const targetTime = parseISO(time);
  return formatDistanceToNow(targetTime, {addSuffix: true, includeSeconds: false}); // Returns time as 'in 22 minutes'
};

const getTransportModeClass= (transportMode: string): string => {
  switch (transportMode) {
    case 'metro':
      return 'bg-orange-500';
    case 'bus':
      return 'bg-red-500';
    default:
      return 'bg-gray-300 dark:bg-gray-700'; // Default class if needed
  }
}

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

const {data} = await useAsyncQuery(GET_DEPARTURES) as { data: StopPlaceResponse };

</script>

