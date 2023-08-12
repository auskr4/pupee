
//takes a timeString and converts to 12 hour HH:MM AM/PM
export const formatTime = (timeString) => {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString([], options);
};