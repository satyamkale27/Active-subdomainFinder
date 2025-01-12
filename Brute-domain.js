import PQueue from "p-queue";

const queue = new PQueue({ concurrency: 4 });

const task = async (name, delay) => {
  console.log(`Starting task ${name}`);
  await new Promise((resolve) => setTimeout(resolve, delay));
  console.log(`Completed task ${name}`);
};

(async () => {
  await queue.add(() => task("A", 1000)); // adds task A with 10000ms in queue  The await keyword ensures that each queue.add() call completes before moving to the next one
  await queue.add(() => task("B", 500));
  await queue.add(() => task("C", 300));
  await queue.add(() => task("D", 700));
  await queue.add(() => task("E", 200));
})();

queue.onIdle().then(() => {
  console.log("All tasks completed");
});
