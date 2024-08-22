function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val + 7;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  return id.toLowerCase();
}
