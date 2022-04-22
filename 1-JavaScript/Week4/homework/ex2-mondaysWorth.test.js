'use strict';
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(tasks, ratePerHour) {
  if (
    tasks.every(
      (task) => typeof task.duration === 'number' && task.duration >= 0
    ) &&
    typeof ratePerHour === 'number' &&
    ratePerHour >= 0
  ) {
    const taskDurationsInHour = tasks.map((task) => task.duration / 60);
    let totalEarnings = 0;
    taskDurationsInHour.forEach((duration) => {
      totalEarnings += duration * ratePerHour;
    });
    return `€${totalEarnings.toFixed(2)}`;
  }

  //   const totalTaskDuration = tasks.reduce(
  //     (total, task) => total + task.duration / 60,
  //     0
  //   );
  //   return `€${(totalTaskDuration * ratePerHour).toFixed(2)}`;
}

// ! Unit tests (using Jest)
describe('computeEarnings', () => {
  test('should take two parameters', () => {
    // The `.length` property indicates the number of parameters expected by
    // the function.
    expect(computeEarnings).toHaveLength(2);
  });

  test('should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
  test('should be able to be used on any array containing objects with duration properties', () => {
    const result = computeEarnings(
      [{ duration: 60 }, { duration: 60 }],
      hourlyRate
    );
    const expected = '€50.00';
    expect(result).toBe(expected);
  });
});
