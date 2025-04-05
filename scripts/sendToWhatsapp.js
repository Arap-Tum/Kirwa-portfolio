function sendMessage () {
    

    const btn =document.querySelector('.submit-btn');
    const phoneNumber = "254 790 262929"
    const successMessage = document.querySelector('.successMessage');

    btn.addEventListener( 'click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const  phone = document.getElementById('phone').value;

        const message = document.getElementById('message').value;
        
        let infordata =`Hello My name is ${name} \n
            ${message}\n
            Contact me on \n
            Phone  : ${phone}\n
            Email : ${email}\n
            `
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(infordata.trim())}`;
        window.open(whatsappUrl, '_blank');

        successMessage.innerHTML = 'Message sent successfully. I will get back to you soon';
    })



}

sendMessage()