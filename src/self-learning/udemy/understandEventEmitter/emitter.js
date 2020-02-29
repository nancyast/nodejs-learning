// function constructor
function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};
// EVENT LISTENER: the code that responds to an event.
// In javascript's case, the listener will be a function.
// events Object:
// {
//   onSaveFile: [function() {}, function() {}, function() {}],
// }

Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
};

module.exports = Emitter;
