describe("transaction title input submission", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("should submit the transaction title", () => {
		cy.get("#titleInput").type("title input test");
	});

	it("should submit the transaction amount", () => {
		cy.get("#amountInput").type("amount input test");
	});

	it("should check if the button is clickable", () => {
		cy.get("#addTransactionBtn").click();
	});
});
