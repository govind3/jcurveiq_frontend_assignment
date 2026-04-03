export function runMock(events, callback) {
  events.forEach((event, index) => {
    setTimeout(() => {
      callback(event);
    }, index * 1200);
  });
}
