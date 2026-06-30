import { expect, test } from "bun:test"
import { getTestFixture } from "tests/fixtures/get-test-fixture"

const section = {
  power: "Power",
  sensor: "LightSensor",
  driver: "OutputDriver",
  io: "Connectors",
}

const Circuit = () => (
  <board width="60mm" height="50mm" layers={2}>
    <schematicsection name={section.power} displayName="12V Power 2323223" />
    <schematicsection name={section.sensor} displayName="LM358 Light Comparator" />
    <schematicsection name={section.driver} displayName="MOSFET Output Driver" />
    <schematicsection name={section.io} displayName="Input / Output" />

    <chip
      name="J1"
      footprint="pinrow2_p5.08mm"
      manufacturerPartNumber="5.08mm 2-pin screw terminal"
      pinLabels={{ pin1: "VIN_12V", pin2: "GND" }}
      pinAttributes={{
        VIN_12V: { providesPower: true },
        GND: { requiresGround: true },
      }}
      pcbX={-16}
      pcbY={18}
      pcbRotation={180}
      schSectionName={section.io}
      schX={-11}
      schY={5}
    />

    <chip
      name="J2"
      footprint="pinrow2_p5.08mm"
      manufacturerPartNumber="5.08mm 2-pin screw terminal"
      pinLabels={{ pin1: "LED_POS", pin2: "LED_NEG" }}
      pcbX={16}
      pcbY={-18}
      schSectionName={section.io}
      schX={-7}
      schY={5}
    />

    <chip
      name="U1"
      footprint="dip8_w7.62mm"
      manufacturerPartNumber="LM358P"
      pinLabels={{
        pin1: "OUT_A",
        pin2: "IN_A_NEG",
        pin3: "IN_A_POS",
        pin4: "GND",
        pin5: "IN_B_POS",
        pin6: "IN_B_NEG",
        pin7: "OUT_B",
        pin8: "VCC",
      }}
      pinAttributes={{
        VCC: { requiresPower: true },
        GND: { requiresGround: true },
        OUT_A: { mustBeConnected: true },
        IN_A_NEG: { mustBeConnected: true },
        IN_A_POS: { mustBeConnected: true },
      }}
      schPinArrangement={{
        leftSide: { pins: ["VCC", "IN_A_POS", "IN_A_NEG", "GND"], direction: "top-to-bottom" },
        rightSide: { pins: ["OUT_A", "IN_B_POS", "IN_B_NEG", "OUT_B"], direction: "top-to-bottom" },
      }}
      schWidth={2.6}
      schHeight={1}
      pcbX={-2}
      pcbY={2}
      schSectionName={section.sensor}
      schX={0}
      schY={0}
    />

    <resistor
      name="LDR1"
      resistance="100k"
      footprint="axial_p7.62mm"
      pcbX={-22}
      pcbY={5}
      pcbRotation={90}
      schSectionName={section.sensor}
      schX={-5}
      schY={1.5}
    />
    <resistor
      name="R1"
      resistance="10k"
      footprint="axial_p7.62mm"
      pcbX={-22}
      pcbY={-6}
      pcbRotation={90}
      schSectionName={section.sensor}
      schX={-5}
      schY={-1.5}
    />
    <potentiometer
      name="RV1"
      maxResistance="10k"
      footprint="pinrow3_p2.54mm"
      pcbX={20}
      pcbY={7}
      pcbRotation={90}
      schSectionName={section.sensor}
      schX={-1}
      schY={3}
    />
    <resistor
      name="R2"
      resistance="100k"
      footprint="axial_p7.62mm"
      pcbX={5}
      pcbY={-9}
      schSectionName={section.sensor}
      schX={3.5}
      schY={2.5}
    />
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="axial_p5.08mm"
      schOrientation="vertical"
      pcbX={-9}
      pcbY={-12}
      schSectionName={section.power}
      schX={0}
      schY={-2}
    />

    <resistor
      name="R3"
      resistance="1k"
      footprint="axial_p7.62mm"
      pcbX={12}
      pcbY={-4}
      schSectionName={section.driver}
      schX={7}
      schY={1}
    />
    <chip
      name="Q1"
      footprint="to92_inline"
      manufacturerPartNumber="BC547"
      pinLabels={{ pin1: "C", pin2: "B", pin3: "E" }}
      pinAttributes={{
        B: { mustBeConnected: true },
        C: { mustBeConnected: true },
        E: { requiresGround: true },
      }}
      schPinArrangement={{
        leftSide: { pins: ["B"], direction: "top-to-bottom" },
        rightSide: { pins: ["C", "E"], direction: "top-to-bottom" },
      }}
      schWidth={1.2}
      schHeight={0.4}
      pcbX={21}
      pcbY={-5}
      schSectionName={section.driver}
      schX={9.9}
      schY={0}
    />
    <resistor
      name="R4"
      resistance="100k"
      footprint="axial_p7.62mm"
      pcbX={-7}
      pcbY={-18}
      schSectionName={section.driver}
      schX={10}
      schY={3}
    />
    <resistor
      name="R6"
      resistance="100k"
      footprint="axial_p7.62mm"
      pcbX={15}
      pcbY={-10}
      schSectionName={section.driver}
      schX={14}
      schY={-2}
    />
    <chip
      name="SW1"
      footprint="pinrow3_p2.54mm"
      manufacturerPartNumber="SPDT center-off switch"
      pinLabels={{ pin1: "AUTO", pin2: "GATE", pin3: "ON" }}
      pinAttributes={{
        AUTO: { mustBeConnected: true },
        GATE: { mustBeConnected: true },
        ON: { requiresPower: true },
      }}
      schPinArrangement={{
        leftSide: { pins: ["AUTO"], direction: "top-to-bottom" },
        rightSide: { pins: ["GATE", "ON"], direction: "top-to-bottom" },
      }}
      schWidth={1.3}
      schHeight={0.4}
      pcbX={20}
      pcbY={18}
      schSectionName={section.driver}
      schX={13}
      schY={2}
    />
    <chip
      name="Q2"
      footprint="to220_3"
      manufacturerPartNumber="IRLZ44N"
      pinLabels={{ pin1: "GATE", pin2: "DRAIN", pin3: "SOURCE" }}
      pinAttributes={{
        GATE: { mustBeConnected: true },
        DRAIN: { mustBeConnected: true },
        SOURCE: { requiresGround: true },
      }}
      schPinArrangement={{
        leftSide: { pins: ["GATE"], direction: "top-to-bottom" },
        rightSide: { pins: ["DRAIN", "SOURCE"], direction: "top-to-bottom" },
      }}
      schWidth={1.5}
      schHeight={0.4}
      pcbX={4}
      pcbY={-21}
      schSectionName={section.driver}
      schX={16.1}
      schY={0}
    />
    <diode
      name="D1"
      footprint="axial_p10.16mm"
      pcbX={26}
      pcbY={-8}
      pcbRotation={90}
      schSectionName={section.driver}
      schX={8.5}
      schY={3}
    />

    <resistor
      name="R5"
      resistance="1k"
      footprint="axial_p7.62mm"
      pcbX={-9}
      pcbY={13}
      schSectionName={section.power}
      schX={-3}
      schY={1}
    />
    <led
      name="D2"
      color="green"
      footprint="axial_p2.54mm"
      schDisplayValue="PWR"
      pcbX={0}
      pcbY={13}
      schSectionName={section.power}
      schX={0}
      schY={1}
    />

    <hole name="H1" diameter="3.2mm" pcbX={-27.5} pcbY={22.5} />
    <hole name="H2" diameter="3.2mm" pcbX={27.5} pcbY={22.5} />
    <hole name="H3" diameter="3.2mm" pcbX={-27.5} pcbY={-22.5} />
    <hole name="H4" diameter="3.2mm" pcbX={27.5} pcbY={-22.5} />

    <silkscreentext text="12V IN" pcbX={-16} pcbY={14.5} fontSize={1.2} />
    <silkscreentext text="LED STRIP OUT" pcbX={16} pcbY={-14.5} fontSize={1.2} />
    <silkscreentext text="AUTO  OFF  ON" pcbX={19} pcbY={14.5} fontSize={1} />
    <silkscreentext text="Automatic Night Light Controller" pcbX={0} pcbY={23} fontSize={1.2} />

    <trace from=".J1 > .VIN_12V" to="net.V12" width="0.8mm" />
    <trace from=".J1 > .GND" to="net.GND" width="0.8mm" />
    <trace from=".J2 > .LED_POS" to="net.V12" width="1mm" />
    <trace from=".J2 > .LED_NEG" to="net.SWITCHED_NEG" width="1mm" />

    <trace from=".U1 > .VCC" to="net.V12" />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".C1 > .pin1" to="net.V12" />
    <trace from=".C1 > .pin2" to="net.GND" />

    <trace from=".LDR1 > .pin1" to="net.V12" />
    <trace from=".LDR1 > .pin2" to="net.LIGHT_SENSE" />
    <trace from=".R1 > .pin1" to="net.LIGHT_SENSE" />
    <trace from=".R1 > .pin2" to="net.GND" />
    <trace from=".U1 > .IN_A_NEG" to="net.LIGHT_SENSE" />

    <trace from=".RV1 > .pin1" to="net.V12" />
    <trace from=".RV1 > .pin2" to="net.THRESHOLD" />
    <trace from=".RV1 > .pin3" to="net.GND" />
    <trace from=".U1 > .IN_A_POS" to="net.THRESHOLD" />
    <trace from=".R2 > .pin1" to="net.THRESHOLD" />
    <trace from=".R2 > .pin2" to="net.OPAMP_OUT" />

    <trace from=".U1 > .OUT_A" to="net.OPAMP_OUT" />
    <trace from=".R3 > .pin1" to="net.OPAMP_OUT" />
    <trace from=".R3 > .pin2" to=".Q1 > .B" />
    <trace from=".Q1 > .E" to="net.GND" />
    <trace from=".Q1 > .C" to="net.AUTO_GATE_PULLDOWN" />
    <trace from=".SW1 > .AUTO" to="net.AUTO_GATE_PULLDOWN" />
    <trace from=".SW1 > .GATE" to="net.MOSFET_GATE" />
    <trace from=".SW1 > .ON" to="net.V12" />
    <trace from=".R4 > .pin1" to="net.V12" />
    <trace from=".R4 > .pin2" to="net.AUTO_GATE_PULLDOWN" />
    <trace from=".R6 > .pin1" to="net.MOSFET_GATE" />
    <trace from=".R6 > .pin2" to="net.GND" />
    <trace from=".Q2 > .GATE" to="net.MOSFET_GATE" />
    <trace from=".Q2 > .DRAIN" to="net.SWITCHED_NEG" width="1mm" />
    <trace from=".Q2 > .SOURCE" to="net.GND" width="1mm" />

    <trace from=".D1 > .anode" to="net.SWITCHED_NEG" />
    <trace from=".D1 > .cathode" to="net.V12" />
    <trace from=".R5 > .pin1" to="net.V12" />
    <trace from=".R5 > .pin2" to=".D2 > .pos" schDisplayLabel="PWR_LED" />
    <trace from=".D2 > .neg" to="net.GND" />
  </board>
)


test("repro135: schematic section title overlaps generated terminal labels", async () => {
  const { circuit } = getTestFixture()

  circuit.add(<Circuit />)
  await circuit.renderUntilSettled()

  const schematicTexts = circuit
    .getCircuitJson()
    .filter((elm) => elm.type === "schematic_text")

  expect(
    schematicTexts.some(
      (text) => (text as any).text === "LM358 Light Comparator",
    ),
  ).toBe(true)

  expect(circuit).toMatchSchematicSnapshot(import.meta.path)
})
