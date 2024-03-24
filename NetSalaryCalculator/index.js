function calculateSalary() {
    const basicSalaryInput = document.getElementById("basicSalary");
    const payeeTaxOutput = document.getElementById("payeeTax");
    const nhifDeductionsOutput = document.getElementById("nhifDeductions");
    const nssfDeductionsOutput = document.getElementById("nssfDeductions");
    const netSalaryOutput = document.getElementById("netSalary");

    // Get the input value and convert it to a number
    const basicSalary = Number(basicSalaryInput.value);

    // Constants for tax rates and deductions
    const nhifRates = {
        // Define the NHIF rates based on the provided link
        // ...
    };

    const nssfRates = {
        // Define the NSSF rates based on the provided link
        // ...
    };

    // Calculating NHIF deductions
    let nhifDeductions = 0;
    for (const threshold in nhifRates) {
        if (basicSalary <= threshold) {
            nhifDeductions = nhifRates[threshold];
            break;
        }
    }

    // Calculating NSSF deductions
    let nssfDeductions = 0;
    for (const threshold in nssfRates) {
        if (basicSalary <= threshold) {
            nssfDeductions = basicSalary * nssfRates[threshold];
            break;
        }
    }

    // Calculating Payee Tax
    const taxableIncome = basicSalary - nhifDeductions - nssfDeductions;
    let payeeTax = 0;
    if (taxableIncome > 24000) {
        if (taxableIncome <= 28800) {
            payeeTax = (taxableIncome - 24000) * 0.1;
        } else if (taxableIncome <= 38400) {
            payeeTax = 480 + (taxableIncome - 28800) * 0.15;
        } else if (taxableIncome <= 48000) {
            payeeTax = 1200 + (taxableIncome - 38400) * 0.2;
        } else if (taxableIncome <= 57600) {
            payeeTax = 2400 + (taxableIncome - 48000) * 0.25;
        } else {
            payeeTax = 4200 + (taxableIncome - 57600) * 0.3;
        }
    }

    // Calculating net salary
    const netSalary = basicSalary - nhifDeductions - nssfDeductions - payeeTax;

    // Output the results
    payeeTaxOutput.textContent = "Payee Tax: " + payeeTax;
    nhifDeductionsOutput.textContent = "NHIF Deductions: " + nhifDeductions;
    nssfDeductionsOutput.textContent = "NSSF Deductions: " + nssfDeductions;
    netSalaryOutput.textContent = "Net Salary: " + netSalary;
}