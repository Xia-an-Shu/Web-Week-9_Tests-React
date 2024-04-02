import Like from "../like";
import { render, screen, fireEvent } from "@testing-library/react"

/*
Incluya, en una suite, las siguientes pruebas:

Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
*/

describe("Like", () => {
    let paragraph;
    let incrementButton;
    let decrementButton;
    
    test("Defaults to 0 likes", () => {
        render(<Like />);
        paragraph = screen.getByText("Likes: 0");
        expect(paragraph).toBeInTheDocument();
    });

    test("Increment likes by one", () => {
        render(<Like />);
        incrementButton = screen.getByText("Like");
        fireEvent.click(incrementButton);
        paragraph = screen.getByText("Likes: 1");
        expect(paragraph).toBeInTheDocument();
    });

    test("Decrement likes by one", () => {
        render(<Like />);
        decrementButton = screen.getByText("Dislike");
        fireEvent.click(decrementButton);
        paragraph = screen.getByText("Likes: -1");
        expect(paragraph).toBeInTheDocument();
    });

});
