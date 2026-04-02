import { test, expect } from "bun:test"
import { RootCircuit } from "lib/RootCircuit"
import "lib/register-catalogue"

test("pinLabels with invalid key like 'A1' should throw a clear error", async () => {
  const circuit = new RootCircuit()

  circuit.add(
    <chip
      name="U1"
      pcbX={0}
      pcbY={0}
      footprint="soic8"
      pinLabels={{
        // @ts-expect-error
        A1: "GND",
      }}
    />,
  )
  circuit.add(<trace from=".U1 > .GND" to=".U1 > .pin1" />)

  await circuit.renderUntilSettled()
})
