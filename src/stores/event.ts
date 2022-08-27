import mitt from "mitt";
import type { Emitter, EventType } from "mitt";
import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: (): Emitter<Record<EventType, unknown>> => mitt(),
});
