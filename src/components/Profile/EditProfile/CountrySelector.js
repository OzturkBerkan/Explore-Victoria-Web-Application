import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function CountrySelector() {
    const options = useMemo(() => countryList().getData(), [])

    var init_value = options.find(o => o.value === JSON.parse(localStorage.getItem("profile")).home_country.value) ?? ''
    const [value, setValue] = useState(init_value)

    const changeHandler = value => {
        setValue(value)

        // Set the country in the profile stored locally
        var profile = JSON.parse(localStorage.getItem("profile"))
        profile.home_country = value
        localStorage.setItem("profile", JSON.stringify(profile))
    }

    return (
        <Select
            options={options}
            value={value}
            onChange={changeHandler}
            placeholder='Select Home Country...'>
        </Select>
    )
}