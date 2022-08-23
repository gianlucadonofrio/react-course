import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Dragon Ball";
  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargan las images ", () => {
    const gifs = [
      {
        id: "id122",
        title: "Goku",
        url: "https://goku.com",
      },
      {
        id: "id124",
        title: "Vegetta",
        url: "https://vegetta.com",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
