import React from 'react'

const DemoForm = () => {
    return (
        <form className='bg-transparent/5 p-5'>
            <div>
                <div className='flex my-5'>
                    <label className='w-32' htmlFor="text">Text:</label>
                    <input className='w-48' type="text" id="text" name="text" required />
                </div>

                <div className='flex my-5'>
                    <label className='w-32' htmlFor="textarea">Textarea:</label>
                    <textarea className='w-48' id="textarea" name="textarea" required />
                </div>

                <div className='flex my-5'>
                    <label className='w-32' htmlFor="select">Select:</label>
                    <select className='w-48' name="select" id="select" required>
                        <option value=""></option>
                        <option value="sel-1">Select Option 1</option>
                        <option value="sel-2">Select Option 2</option>
                        <option value="sel-3">Select Option 3</option>
                    </select>
                </div>

                <div className='flex my-5'>
                    <label className='w-32' htmlFor="multi-select">Multi Select:</label>
                    <select className='w-48' name="multi-select" id="multi-select" multiple required>
                        <option value="mul-sel-1">Multi select Option 1</option>
                        <option value="mul-sel-2">Multi select Option 2</option>
                        <option value="mul-sel-3">Multi select Option 3</option>
                    </select>
                </div>

                <div className='flex my-5'>
                    <label className='w-32' htmlFor="checkbox">checkbox:</label>
                    <input type="checkbox" id="checkbox" name="checkbox"></input>
                </div>

                <div className='flex my-5'>
                    <label className='w-32' htmlFor="radio1">Option 1:</label>
                    <input type="radio" id="radio1" name="radio" value="radio-1" required></input>
                </div>
                <div className='flex my-5'>
                    <label className='w-32' htmlFor="radio2">Option 2:</label>
                    <input type="radio" id="radio2" name="radio" value="radio-2"></input>
                </div>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Submit</button>

            </div>
        </form>
    )
}

export default DemoForm