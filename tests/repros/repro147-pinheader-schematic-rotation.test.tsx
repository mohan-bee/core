import { expect, test } from "bun:test"
import { getTestFixture } from "tests/fixtures/get-test-fixture"

export default function PinheaderSchematicRotationRepro() {
  return (
    <board width="10mm" height="10mm" routingDisabled>
      <pinheader pinCount={9} name="J1" schY={5} schX={1} schRotation={180} />
      <pinheader pinCount={9} schY={1} schX={1} name="J2" />
      <pinheader pinCount={9} name="J3" schY={5} schX={4} schRotation={90} />
      <pinheader pinCount={9} schY={1} schX={4} name="J4" schRotation={-90} />
    </board>
  )
}

test("repro147: pinheader schematic rotations", async () => {
  const { circuit } = getTestFixture()

  circuit.add(<PinheaderSchematicRotationRepro />)

  await circuit.renderUntilSettled()

  expect(circuit).toMatchSchematicSnapshot(import.meta.path)
})
