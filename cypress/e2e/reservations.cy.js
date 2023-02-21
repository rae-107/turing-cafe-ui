describe("Reservations", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      fixture: "reservations.json",
    }).visit("http://localhost:3000/");
  });

  it('Should have background image', () => {
    cy.get('.App').should('have.css', 'background-image')
  })

  it("Should have title", () => {
    cy.get("h1").contains("Turing Cafe Reservations");
  });

  it("Should have reservation cards", () => {
    cy.get(".reservation").should("have.length", 3);
    cy.get(".reservation").first().contains("Christie");
    cy.get(".reservation").first().contains("12/29");
    cy.get(".reservation").first().contains("7:00 pm");
    cy.get(".reservation").first().contains("Number of guests: 12");
  });

  it("Should have form with all inputs", () => {
    cy.get("input").should("have.length", 4);
    cy.get("Form > button").contains("Make Reservation");
  });

  it('Should have inputs that have their value reflect the input', () => {
    cy.get('input').first().type('Lily')
    cy.get('input').first().should('have.value', 'Lily')
  })

  it('Should be able to make a reservation', () => {
    cy.get('input').first().type('Rae')
    cy.get('input').eq(1).type('5/12')
    cy.get('input').eq(2).type('6:15')
    cy.get('input').eq(3).type(2)
    cy.get('.reservation-button').click()
    cy.get('.reservation').last().contains('Rae')
    cy.get('.reservation').last().contains('5/12')
    cy.get('.reservation').last().contains('6:15')
    cy.get('.reservation').last().contains("Number of guests: 02")
  })
});