const EventEmitter = require("events");
const emitter = new EventEmitter();

// ================= Register an event =================
const messageHandler = () => {
    console.log("received");
};

// Add listener
emitter.on("message", messageHandler);

// ================= Trigger an event =================
emitter.emit("message"); // Output: "received"

// ================= Trigger event only once =================
emitter.once("start", () => {
    console.log("once");
});
emitter.emit("start"); // Output: "once"
emitter.emit("start"); // Won't run again

// ================= Remove event listener =================
emitter.off("message", messageHandler);

// Test after removing
emitter.emit("message"); // No output, listener removed
