<script lang="ts" setup>
import { formatDistanceToNow, parseISO, format } from 'date-fns';

const props = defineProps({
    name: { type: String, required: true },
    line: { type: String, required: true },
    transportMode: { type: String, required: true },
    departureTime: { type: String, required: true }
});

const transportModeColor = computed(() => {
    switch (props.transportMode) {
        case 'metro': return 'bg-orange-500'
        case 'bus': return 'bg-red-500'
        default: return 'bg-gray-300 dark:bg-gray-700'
    }})

const departureTimeIso = computed(() => 
    parseISO(props.departureTime))

// Returns time as '23:40'
const exactDepartureTime = computed(() => 
    format(departureTimeIso.value, 'HH:mm'))

// Returns time as 'in 22 minutes'
const relativeDepartureTime = computed(() => 
    formatDistanceToNow(departureTimeIso.value, { addSuffix: true, includeSeconds: false }))

</script>

<template>
    <div class="p-3 rounded-lg shadow-md bg-white dark:bg-gray-700">
        <div class="flex items-center space-x-2">
            <div class="flex items-center space-x-1 rounded p-1 text-white" :class="transportModeColor">
                <IconMetro v-if="props.transportMode == 'metro'" />
                <IconBus v-else-if="props.transportMode == 'bus'" />
                <div class="text-sm font-semibold">{{ props.line }}</div>
            </div>
            <div class="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {{ props.name }}
            </div>
        </div>
        <!-- Departure time -->
        <div class="flex justify-between text-gray-700 dark:text-gray-300 pt-3">
            <time class="font-bold">{{ exactDepartureTime }}</time>
            <span class="italic">{{ relativeDepartureTime }}</span>
        </div>
    </div>
</template>
