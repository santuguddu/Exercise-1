// ===========================
// Employee Data
// ===========================
var employeeData = {
    name: "Madeleine Willson",
    claimNumber: "20042047"
};

// ===========================
// Prescription Drugs Data
// ===========================
var prescriptionDrugs = [
    {
        drugName: "Naproxen",
        prescriptionDate: "February 28, 2024",
        datePurchased: "February 29, 2024",
        provider: "Dr. Best",
        paidAmount: "$20.00"
    },
    {
        drugName: "Amoxicillin",
        prescriptionDate: "March 5, 2024",
        datePurchased: "March 6, 2024",
        provider: "Dr. Smith",
        paidAmount: "$25.00"
    },
    {
        drugName: "Paracetamol",
        prescriptionDate: "March 10, 2024",
        datePurchased: "March 11, 2024",
        provider: "Dr. John",
        paidAmount: "$15.00"
    }
];

// ===========================
// Over-the-Counter Drugs Data
// ===========================
var overTheCounterDrugs = [
    {
        drugName: "Advil",
        datePurchased: "March 28, 2024",
        paidAmount: "$8.00",
        sellerName: "Shoppers Drug Mart",
        reason: "Pain"
    },
    {
        drugName: "Tylenol",
        datePurchased: "April 2, 2024",
        paidAmount: "$12.50",
        sellerName: "London Drugs",
        reason: "Headache"
    },
    {
        drugName: "Benadryl",
        datePurchased: "April 10, 2024",
        paidAmount: "$9.75",
        sellerName: "Walgreens",
        reason: "Allergies"
    }
];

// ===========================
// Medical Supplies Data
// ===========================
var medicalSupplies = [
    {
        itemPurchased: "Tensor",
        datePurchased: "February 28, 2024",
        wasPrescribed: "Yes",
        provider: "Dr. Best",
        paidAmount: "$10.00",
        sellerName: "Shoppers DrugMart"
    },
    {
        itemPurchased: "Elastic Bandage",
        datePurchased: "March 3, 2024",
        wasPrescribed: "No",
        provider: "N/A",
        paidAmount: "$6.50",
        sellerName: "London Drugs"
    },
    {
        itemPurchased: "Knee Brace",
        datePurchased: "March 15, 2024",
        wasPrescribed: "Yes",
        provider: "Dr. Smith",
        paidAmount: "$35.00",
        sellerName: "Shoppers Drug Mart"
    }
];

// ===========================
// Helper: Create a table row
// ===========================
function createRow(values) {
    var row = document.createElement("tr");
    for (var i = 0; i < values.length; i++) {
        var cell = document.createElement("td");
        cell.textContent = values[i];
        row.appendChild(cell);
    }
    return row;
}

// ===========================
// Render Prescription Drugs Table
// ===========================
function renderPrescriptionDrugs() {
    var tbody = document.getElementById("prescription-drugs-body");
    tbody.innerHTML = "";
    for (var i = 0; i < prescriptionDrugs.length; i++) {
        var item = prescriptionDrugs[i];
        tbody.appendChild(createRow([
            item.drugName,
            item.prescriptionDate,
            item.datePurchased,
            item.provider,
            item.paidAmount
        ]));
    }
}

// ===========================
// Render Over-the-Counter Drugs Table
// ===========================
function renderOverTheCounterDrugs() {
    var tbody = document.getElementById("otc-drugs-body");
    tbody.innerHTML = "";
    for (var i = 0; i < overTheCounterDrugs.length; i++) {
        var item = overTheCounterDrugs[i];
        tbody.appendChild(createRow([
            item.drugName,
            item.datePurchased,
            item.paidAmount,
            item.sellerName,
            item.reason
        ]));
    }
}

// ===========================
// Parking Data
// ===========================
var parkingData = [
    {
        address: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
        date: "March 28, 2024",
        paidAmount: "$10.00",
        meterUsed: "yes",
        meterNumber: "12245"
    }
];

// ===========================
// Mileage Data
// ===========================
var mileageData = [
    {
        appointmentDate: "March 28, 2024",
        providerAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
        kmRoundTrip: "20 km"
    }
];

// ===========================
// Footer Data
// ===========================
var footerData = {
    workerAppId: "712041",
    submittedDate: "March 28, 2024 20:43"
};

// ===========================
// Render Parking Table
// ===========================
function renderParking() {
    var tbody = document.getElementById("parking-body");
    tbody.innerHTML = "";
    for (var i = 0; i < parkingData.length; i++) {
        var item = parkingData[i];
        tbody.appendChild(createRow([
            item.address,
            item.date,
            item.paidAmount,
            item.meterUsed,
            item.meterNumber
        ]));
    }
}

// ===========================
// Render Mileage Table
// ===========================
function renderMileage() {
    var tbody = document.getElementById("mileage-body");
    tbody.innerHTML = "";
    for (var i = 0; i < mileageData.length; i++) {
        var item = mileageData[i];
        tbody.appendChild(createRow([
            item.appointmentDate,
            item.providerAddress,
            item.workplaceAddress,
            item.kmRoundTrip
        ]));
    }
}

// ===========================
// Bus or Taxi Fare Data
// ===========================
var busTaxiData = [
    {
        appointmentDate: "March 28, 2024",
        startingPoint: "",
        providerAddress: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
        busOrTaxi: "Bus",
        totalFare: "$3.00"
    },
    {
        appointmentDate: "March 27, 2024",
        startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada",
        providerAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
        busOrTaxi: "Taxi",
        totalFare: "$15.00"
    }
];

// ===========================
// Render Bus or Taxi Fare Table
// ===========================
function renderBusTaxi() {
    var tbody = document.getElementById("bus-taxi-body");
    tbody.innerHTML = "";
    for (var i = 0; i < busTaxiData.length; i++) {
        var item = busTaxiData[i];
        tbody.appendChild(createRow([
            item.appointmentDate,
            item.startingPoint,
            item.providerAddress,
            item.busOrTaxi,
            item.totalFare
        ]));
    }
}

// ===========================
// Render Footer
// ===========================
function renderFooter() {
    document.getElementById("worker-app-id").textContent = footerData.workerAppId;
    document.getElementById("submitted-date").textContent = footerData.submittedDate;
}

// ===========================
// Insert Employee Info
// ===========================
function renderEmployeeInfo() {
    document.getElementById("employee-name").textContent = employeeData.name;
    document.getElementById("claim-number").textContent = employeeData.claimNumber;
}

// ===========================
// Initialize Page
// ===========================
function init() {
    renderEmployeeInfo();
    renderPrescriptionDrugs();
    renderOverTheCounterDrugs();
    renderMedicalSupplies();
    renderParking();
    renderMileage();
    renderBusTaxi();
    renderFooter();
}

document.addEventListener("DOMContentLoaded", init);
