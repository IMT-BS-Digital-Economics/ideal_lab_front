class PubSub {
  constructor() {
    this.events = [];
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  publish(event, data) {
    console.log('hello les jigolos')
    console.log(this.events[event])
    const eventCallbacks = this.events[event];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => callback(data));
    }
  }
}

export const pubSub = new PubSub();
