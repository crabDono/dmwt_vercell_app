import { NextResponse } from "next/server";

// Hilfsfunktion zum Abrufen der Daten für eine einzelne Münze
async function getCoinData(coinId: string, apiKey: string) {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=eur&days=365`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-cg-demo-api-key": apiKey,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data for ${coinId}`);
  }
  return response.json();
}

export async function GET() {
  const apiKey = process.env.COINGECKO_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "CoinGecko API Key ist nicht konfiguriert." },
      { status: 500 }
    );
  }

  try {
    // Rufe die Daten für alle Währungen parallel ab
    const [
      btcData,
      ethData,
      solData,
      usdtData,
      usdcData,
      bnbData,
      xrpData,
      adaData,
      dotData,
      dogeData,
    ] = await Promise.all([
      getCoinData("bitcoin", apiKey),
      getCoinData("ethereum", apiKey),
      getCoinData("solana", apiKey),
      getCoinData("tether", apiKey),
      getCoinData("usd-coin", apiKey),
      getCoinData("binancecoin", apiKey),
      getCoinData("ripple", apiKey),
      getCoinData("cardano", apiKey),
      getCoinData("polkadot", apiKey),
      getCoinData("dogecoin", apiKey),
    ]);

    // Gebe die Daten in einem strukturierten Objekt zurück
    const responseData = {
      btc: btcData.prices, // .prices enthält die [timestamp, price] Arrays
      eth: ethData.prices,
      sol: solData.prices,
      usdt: usdtData.prices,
      usdc: usdcData.prices,
      bnb: bnbData.prices,
      xrp: xrpData.prices,
      ada: adaData.prices,
      dot: dotData.prices,
      doge: dogeData.prices,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unbekannter Fehler";
    return NextResponse.json(
      {
        error: "Interner Serverfehler beim Abrufen der CoinGecko-Daten.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
