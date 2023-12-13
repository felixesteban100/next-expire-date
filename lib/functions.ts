export function getColorForDate(inputDate: Date): string {
    const today = new Date();
    const timeDiff = inputDate.getTime() - today.getTime();
    const daysDifference = timeDiff / (1000 * 3600 * 24);

    if (daysDifference < 3) {
        return 'text-red-500'; // Date is in the past
    } else if (daysDifference <= 10) {
        return 'text-yellow-400'; // Date is within a week
    } else {
        return 'text-green-400'; // Date is more than a week away
    }
}
