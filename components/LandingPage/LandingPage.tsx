import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Badge, Box, Button, Card, Flex, Grid, Group, Modal, Popover, Text, useMantineColorScheme } from "@mantine/core";
import { useState } from "react";


const LandingPage = ({ data }: { data: any }) => {


    const min716 = useMediaQuery('(min-width: 716px)');
    const max715 = useMediaQuery('(max-width: 715px)');
    const max1024 = useMediaQuery('(max-width: 1024px)');

    let [open, setOpen] = useState(false)


    let gridColumnSpan;

    if (min716) {
        gridColumnSpan = 4;
    } else if (max715) {
        gridColumnSpan = 7;
    }

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Flex>

            {/* Card */}
            <Grid maw="1300px" m="auto">
                {data.map((datas: any) => (

                    <Grid.Col m="auto" key={datas.name} span={gridColumnSpan}>

                        <Card m="auto" w="100%" bg={dark ? '#25262b' : 'whitesmoke'}>

                            <Group position="apart"  >

                                <Group m="auto" >
                                    <Badge size="lg" >
                                        <Text size={12} key={datas.yearDiscovered}>
                                            YEAR: {datas.yearDiscovered}
                                        </Text>
                                    </Badge>
                                </Group>

                                <Group m="auto" >
                                    <Badge size="lg">
                                        <Text size={12} key={datas.symbol}>
                                            Symbol: {datas.symbol}
                                        </Text>
                                    </Badge>
                                </Group>

                            </Group>


                            <Flex gap="3px" direction="column" mt="md" align="center" key={datas.name} >


                                <Text size={max1024 ? 14 : 18} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                    NAME: {datas.name}
                                </Text>

                                <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                    ATOMICMASS: {datas.atomicMass}
                                </Text>

                                <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                    ATOMICNUMBER: {datas.atomicNumber}
                                </Text>

                                <Flex m="auto" className={`${open ? "block" : "none"}`} key={datas.symbol} >
                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} mt="12px" className="justifytext">
                                        ATOMICRADIUS: {datas.atomicRadius}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        BOILINGPOINT: {datas.boilingPoint}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        BONDINGTYPE: {datas.bondingType}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} mt="12px" className="justifytext">
                                        CPKHEXCOlOR: {datas.cpkHexColor}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        DENSITY: {datas.density}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        ELECTRONEGATIVITY: {datas.electronAffinity}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} mt="12px" className="justifytext">
                                        ELECTRONIC CONFIGURATION: {datas.electronicConfiguration}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        GROUP BLOCK: {datas.groupBlock}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        ION RADIUS: {datas.ionRadius}
                                    </Text>

                                    <Text size={max1024 ? 12 : 15} style={{ fontFamily: "'Righteous', cursive", }} mt="12px" className="justifytext">
                                        IONIZATION ENERGY: {datas.ionizationEnergy}
                                    </Text>

                                    <Text size={max1024 ? 13 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        MELTING POINT: {datas.meltingPoint}
                                    </Text>

                                    <Text size={max1024 ? 13 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        OXIDATION STATES: {datas.oxidationStates}
                                    </Text>

                                    <Text size={max1024 ? 13 : 15} style={{ fontFamily: "'Righteous', cursive", }} mt="12px" className="justifytext">
                                        STANDARD STATE: {datas.standardState}
                                    </Text>

                                    <Text size={max1024 ? 13 : 15} style={{ fontFamily: "'Righteous', cursive", }} className="justifytext">
                                        VAN DER WAALS RADIUS: {datas.vanDerWaalsRadius}
                                    </Text>
                                </Flex>

                            </Flex>



                            <Group position="center" mt="md">
                                <Button variant="outline" size="xs" onClick={() => setOpen(!open)} color="gray" >View Full Details</Button>
                            </Group>

                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </Flex >
    )
}

export default LandingPage