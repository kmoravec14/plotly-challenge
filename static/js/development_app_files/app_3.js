// const url = "../../data/samples.json";
const path = "../../data/samples.json";
d3.json(path).then(function(data) {
    sample_values =  data.samples[0].sample_values.slice(0,10).reverse();
    console.log(sample_values);
    otu_ids =  data.samples[0].otu_ids.slice(0,10);
    console.log (otu_ids); 
    yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();
    otu_labels = data.samples[0].otu_labels.slice(0,10);
    console.log(otu_labels);

    let data2 = [{
        x: sample_values,
        y: yticks,
        text: otu_labels,
        labels: otu_ids,
        type: "bar",
        orientation: "h"
    }];

    var layout = {
        height: 600,
        width: 400
    };

    Plotly.newPlot("bar", data2, layout);


    let data3 = [{
        mode: 'markers', 
        x: otu_ids,
        y: sample_values,
        marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
          },
        text: otu_labels
    }];

    var layout2 = {
        height: 600,
        width: 1500,
        title: {text: "Bacteria Cultures in Samples"},
        xaxis: {title: "OTU ID"}
    };


    Plotly.newPlot("bubble", data3, layout2);
    testsubjectid()
    

});

d3.selectAll("#selDataset").on("change", testsubjectid);

// const path = "../../samples.json";
var otu_ids;
function testsubjectid() {
    var dropdownMenu = d3.select("#selDataset");
    d3.json(path).then((data) =>{
        data.names.forEach(element => {
            dropdownMenu.append("option").text(element).property("value")
        });
        metadata(dropdownMenu.property("value"));
        bar(dropdownMenu,properties("value"));
    });
};

function metadata(subjectid){
    d3.json(path).then((data) =>{
       meta = data.metadata
    //    console.log(meta)
       meta_id = meta.filter(mt=>mt.id==subjectid)
    //    console.log(meta_id)
    
    demo_id = meta_id[0]
        // Clear out current contents in the panel
		d3.select("#sample-metadata").html("");
        // Add new content
       var placeholder = d3.select("#sample-metadata")
       Object.entries(demo_id).forEach(([key,value])=>{
           placeholder.append("p").text(`${key}:${value}`)
       })

    })
} 

// function bar(subjectid){
//     d3.json(path).then((data) =>{
//         var a = subjectid
//         console.log(a)
//         console.log("test")
        
        // sample_values =  data.samples[0].sample_values.slice(0,10).reverse();
        // console.log(sample_values);
        // otu_ids =  data.samples[0].otu_ids.slice(0,10);
        // console.log (otu_ids); 
        // yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();
        // otu_labels = data.samples[0].otu_labels.slice(0,10);
        // console.log(otu_labels);
    
        // let data2 = [{
        //     x: sample_values,
        //     y: yticks,
        //     text: otu_labels,
        //     labels: otu_ids,
        //     type: "bar",
        //     orientation: "h"
        // }];
    
        // var layout = {
        //     height: 600,
        //     width: 400
        // };
    
        // Plotly.newPlot("bar", data2, layout);

//     })
// } 