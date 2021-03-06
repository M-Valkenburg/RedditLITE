export const numberReducer = (num) => {
    if (num < 1000) {
        return num;
    }

    if (num >= 1000) {
        return Math.floor((num / 1000)) + 'K';
    }

    if (num >= 1000000) {
        return Math.floor((num / 1000000)) + 'M';
    }
};

export default numberReducer;
