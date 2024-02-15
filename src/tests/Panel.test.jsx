import { fireEvent, render, screen } from "@testing-library/react";
import { test } from "vitest";
import { Panel } from "../components/Panel";
import Movie from "../components/Movie";

test("El panel no muestra mensaje al principio", () => {
  render(<Panel />);

  expect(screen.queryByText("Hola!")).not.toBeInTheDocument();
});

test("El panel muestra un mensaje si pulsamos el botón", () => {
  render(<Panel />);

  fireEvent.click(screen.getByText(/Púlsame/i));

  expect(screen.queryByText("Hola!")).toBeInTheDocument();
});

test("la información se muestra", () => {
  render(<Movie titulo="Harry Potter" genero="fantasia"/>);

  expect(screen.queryByText("Harry Potter")).toBeInTheDocument();
  expect(screen.queryByText("fantasia")).toBeInTheDocument();
});

