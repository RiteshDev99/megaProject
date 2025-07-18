import React, {useId} from "react";

const Select = ({
    options,
    label,
    className,
    ...props

                },ref) => {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label  htmlFor={id} className=''>
                {label}
            </label>}

            <select  id={id} ref={ref} {...props} className={`${className} px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-50 duration-200 border border-gray-200 w-full`}>
                {options ?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </div>

    )
}

export default React.forwardRef(Select)
