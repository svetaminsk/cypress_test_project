class ContactUs {
    contactForm_submission(first_name, last_name, email, text) {
        cy.get('[name="first_name"]').type(first_name);
        cy.get('[name="last_name"]').type(last_name);
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(text)
        cy.get('[type="submit"]').click();
    }
}

export default ContactUs;