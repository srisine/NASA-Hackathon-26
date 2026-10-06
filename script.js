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


  // Optional: Prevent users from selecting an end date earlier than the start date
  const startDate = document.getElementById('start-date');
  const endDate = document.getElementById('end-date');
  const displayDate = document.getElementsByClassName('display-date')

  startDate.addEventListener('change', (e) => {
    endDate.min = e.target.value;
  });

  // let selectedDates = {start:'', end:''}
    let from = "";
  let to = "";
 function setDate(){
   from = startDate.value;
   to = endDate.value;
  // console.log(`${from},${to}`);
// return[from,to]
 }
endDate.addEventListener("change", () => {
    setDate();
    document.querySelector('.display-start-date').textContent += from;
    document.querySelector('.display-end-date').textContent += to;
    console.log(from, to);
});
