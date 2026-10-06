//For Metric
const selectMetricElement = document.getElementById('metric');

selectMetricElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  console.log(`User selected: ${selectedValue}`);
});
//For Graph
const selectGraphElement = document.getElementById('graph');

selectGraphElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  console.log(`User selected: ${selectedValue}`);
});