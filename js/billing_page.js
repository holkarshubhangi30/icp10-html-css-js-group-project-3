function calculateTotal() {
    let total = 0;
    const rows = document.querySelectorAll('table tr');
    rows.forEach((row, index) => {
        if (index > 0) { 
            const price = parseFloat(row.cells[1].innerText.replace('₹', ''));
            const quantity = row.querySelector('input[type="number"]').value;
            const itemTotal = price * quantity;
            row.cells[3].innerText = '₹' + itemTotal.toFixed(2);
            total += itemTotal;
        }
    });
    const deliveryCharges = 45;
    const gst = total * 0.18;
    const finalAmount = total + gst + deliveryCharges;

    document.getElementById('total-amount').innerText = total.toFixed(2);
    document.getElementById('gst-amount').innerText = gst.toFixed(2);

    document.getElementById('gst-amount').innerText = gst.toFixed(2);
    document.getElementById('delivery-charges').innerText = deliveryCharges.toFixed(2);
    document.getElementById('final-amount').innerText = finalAmount.toFixed(2);
}