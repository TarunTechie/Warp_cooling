import Pcard from "./pcard"
export default function Products()
{
    return(
        <div>
            <h1 className="text-center heading">PRODUCTS</h1>
    <div className="products">
        <Pcard
        image={"assets/Room-AC.jpg"}
        heading={"AIR CONDITIONER"}
        content={"An air conditioner is a device that regulates indoor temperature and humidity. It works by extracting heat from the indoor air and expelling it outside, cooling the indoor space. The process involves refrigerants, coils, compressors, and fans to achieve efficient cooling. Air conditioners are commonly used in homes, offices, and vehicles to provide comfort and improve air quality"}/>
        <Pcard
        image={"assets/Water-Purifier.jpg"}
        heading={"WATER PURIFIER"}
        content={"A water purifier is a device or system designed to remove contaminants and impurities from water, making it safe for consumption or other purposes. The type of water purifier you choose depends on the specific contaminants present in your water source and your desired level of purification"}/>
        <Pcard
        image={"assets/Solar.jpg"}
        heading={"SOLAR HEAT PUMPS"}
        content={"A solar-assisted heat pump (SAHP) is a machine that represents the integration of a heat pump and thermal solar panels in a single integrated system. Typically these two technologies are used separately (or only placing them in parallel) to produce hot water. In this system the solar thermal panel performs the function of the low temperature heat source and the heat produced is used to feed the heat pump's evaporator.[2] The goal of this system is to get high COP and then produce energy in a more efficient and less expensive way."}/>
        <Pcard
        image={"assets/UPS.jpg"}
        heading={"UPS"}
        content={"An uninterruptible power supply (UPS) or uninterruptible power source is a type of continual power system that provides automated backup electric power to a load when the input power source or mains power fails. A UPS differs from a traditional auxiliary/emergency power system or standby generator in that it will provide near-instantaneous protection from input power interruptions by switching to energy stored in battery packs"}/>
    </div></div>)
}