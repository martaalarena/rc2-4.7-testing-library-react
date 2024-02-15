import { fireEvent, render, screen } from "@testing-library/react";
import { test } from "vitest";
import Button from "../components/Button";

test("se muestra una cruz", () => {
    render(<Button/>);

    expect(screen.queryByText("❌")).toBeInTheDocument();
});

test("cuando nos ponemos encima vemos la palabra eliminar", () => {
    render(<Button/>)

    const button = screen.getByRole('button')

    fireEvent.mouseOver(button);

    expect(screen.getByText("Eliminar")).toBeInTheDocument();
})

test("Cuando elimino algo se muestra Eliminado", () => {
    render(<Button/>)

    const button = screen.getByRole('button')
    fireEvent.onClick(button);

    expect(screen.getByText("Eliminado")).toBeInTheDocument();

})
