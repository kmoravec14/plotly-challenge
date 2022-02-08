console.log("Test")

const path = "../../data/samples.json";
console.log(path)
// var sample_values; // global
var otu_ids;

// d3.json("samples.json").then(function(data) {
//   dataset = data;
//   console.log(data);
// });

// // Promise Pending
// const dataPromise = d3.json(path);
// console.log("Data Promise: ", dataPromise);

d3.selectAll("#selDataset").on("change", testsubjetid);

function testsubjectid() {
    var dropdownMenu = d3.select("#selDataset");

// Fetch the JSON data and console log it
    d3.json(path).then((data) =>{
    // sample_values  = data.samples[0].sample_values;
    // otu_ids = data.samples[0].otu_ids;
    data.names.forEach(element => {
        dropdownMenu.append("option").text(element).property("value")
    });
    console.log(data.names);

    firstsubject=data.names[0]
    // var subjectid = dropdownMenu.property("value");

    metadata(firstsubject)
    // metadata(dropdownMenu.property("value"))
    console.log(firstsubject)
//   var sample_values = data.samples[0].sample_values.slice(0,10);
//   var otu_ids = data.samples[0].otu_labels.slice(0,10);
//   let x = samples
});
};

testsubjectid()

function metadata(subjectid){
    d3.json(path).then((data) =>{
       meta = data.metadata
       console.log(meta)
       meta_id = meta.filter(mt=>mt.id==subjectid)
       console.log(meta_id)
    
       demo_id = meta_id[0]
       console.log(meta_id,demo_id)
       var placeholder = d3.select("#sample-metadata")
       Object.entries(demo_id).forEach(([key,value])=>{
           placeholder.append("p").text(`${key}:${value}`)
       })

    })
} 


// Function called by DOM changes
// function getData() {
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
//     // Initialize an empty array for the country's data
//     var data = [];

// let sorted= dataset.sort((a, b) => b.dataset.sam - a.greekSearchResults);

// let A = keys(dataset);
// console.log(A)s

// let populardataset = data;Romans = 5

// var data2 = [{
//     type: 'bar',
//     x: sample_values,
//     y: otu_ids,
//     orientation: 'h'
//   }];
  
//   Plotly.newPlot('bar', data2);

// Sort the data by Greek search results descending
// let y = x.sort((a, b) => b.x.samples.sample_values - a.samples.sample_values);


// var data2 = [{
//     type: 'bar',
//     x: [20, 14, 23],
//     y: ['giraffes', 'orangutans', 'monkeys'],
//     orientation: 'h'
//   }];
  
//   Plotly.newPlot('bar', data2);

// // Initializes the page with a default plot
// function init() {
//     data = [{
//       type: 'bar'
//       x: samples["sample_values"],
//       y: samples["otu_ids"] }];
  
//     Plotly.newPlot("plot", data);
//   }
  
//   // Call updatePlotly() when a change takes place to the DOM
//   d3.selectAll("#selDataset").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
  
//     // Initialize x and y arrays
//     var x = [];
//     var y = [];
  
//     if (dataset === 'dataset1') {
//       x = [1, 2, 3, 4, 5];
//       y = [1, 2, 4, 8, 16];
//     }
  
//     else if (dataset === 'dataset2') {
//       x = [10, 20, 30, 40, 50];
//       y = [1, 10, 100, 1000, 10000];
//     }
  
//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle("plot", "x", [x]);
//     Plotly.restyle("plot", "y", [y]);
//   }
  
//   init();