describe("transaction title input submission", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("should submit the transaction title", () => {
		cy.get("#titleInput").type("title input test");

		cy.get("#amountInput").type("amount input test");

		cy.get("#addTransactionBtn").click();
	});
});
