var mobile = {
    Samsung: {
        SamsungA10: {
            name: "Samsung A10",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "22,000 PKR"
        },
        SamsungA20: {
            name: "Samsung A20",
            ram: "4gb",
            rom: "64gb",
            camera: "18",
            price: "28,000"
        },
        SamsungA30: {
            name: "Samsung A30",
            ram: "4gb",
            rom: "64gb",
            camera: "25",
            price: "29,000"
        }
    },
    IPhone: {
        IPhone11: {
            name: "IPhone11",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "100,000"
        },
        IPhone12: {
            name: "IPhone12",
            ram: "4gb",
            rom: "64gb",
            camera: "12",
            price: "150,000"
        },
        IPhone13: {
            name: "IPhone13",
            ram: "6gb",
            rom: "128gb",
            camera: "24",
            price: "200,000"
        }
    },
    Oppo: {
        OppoV20: {
            name: "OppoV20",
            ram: "8gb",
            rom: "128gb",
            camera: "64",
            price: "54,999"
        },
        OppoF19: {
            name: "OppoF19",
            ram: "6gb",
            rom: "128gb",
            camera: "48",
            price: "36,999"
        },
        OppoF11: {
            name: "OppoF11",
            ram: "4gb",
            rom: "64gb",
            camera: "48",
            price: "35,999"
        }
    },
    Vivo: {
        VivoY20: {
            name: "VivoY20",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "26,999"
        },
        VivoY21: {
            name: "VivoY21",
            ram: "4gb",
            rom: "64gb",
            camera: "13",
            price: "43,999"
        },
        VivoY55: {
            name: "VivoY55",
            ram: "8gb",
            rom: "128gb",
            camera: "50",
            price: "64,999"
        }
    }
}

var company = prompt("Enter your company name");
var model = prompt("Enter your model");

var spec = mobile[company][model];

var name1 = 'Name: ' + spec.name
var ram1 = 'Ram: ' + spec.ram
var rom1 = 'Rom: ' + spec.rom
var camera1 = 'Camera: ' + spec.camera
var price1 = 'Price: ' + spec.price

var comp = ` Your Company Name is <b>${company} </b>And Your Model is <b> ${model} </b> <br> Specification :<br> ${name1} <br>
        ${ram1} <br>
        ${rom1} <br>
        ${camera1} <br>
        ${price1} 
`
document.write(comp);

// console.log(spec.ram);

// console.log(mobile.company.model.ram)

// var com = document.getElementById('company').value
// var mod = document.getElementById('model').value
// var btn = document.getElementById("btn")


// var com = document.getElementById("company").id

// function abc(){
//    console.log(com)
// }


