'use client'

import { formHandler, FormState } from '@/actions'
import React, { useActionState } from 'react'

const DemoForm = () => {
    const initialState: FormState = { success: false };
    const [state, formAction] = useActionState(formHandler, initialState);

    return (
        <div>
            <div className='text-center'>
                <h2 className={`${'rounded-md text-white mb-1 text-2xl'} ${!state.success ? 'bg-red-500' : 'bg-green-500'}`}>
                    {state.message}
                </h2>

                {Object.entries(state.errors || {}).map(([key, value]) => (
                    <p key={key} className='bg-red-500 rounded-md text-white mb-1'>{value}</p>
                ))}
            </div>
            <form className='bg-transparent/5 p-5' action={formAction}>
                <div>
                    <div className='flex my-5'>
                        <label className='w-32' htmlFor="text">Text:</label>
                        <input className='w-48' type="text" id="text" name="text"
                            defaultValue={state.values?.text}
                        />
                    </div>

                    <div className='flex my-5'>
                        <label className='w-32' htmlFor="textarea">Textarea:</label>
                        <textarea className='w-48' id="textarea" name="textarea"
                            defaultValue={state.values?.textarea}
                        />
                    </div>

                    <div className='flex my-5'>
                        <label className='w-32' htmlFor="select">Select:</label>
                        <select className='w-48' name="select" id="select">
                            <option value=""></option>
                            <option value="sel-1">Select Option 1</option>
                            <option value="sel-2">Select Option 2</option>
                            <option value="sel-3">Select Option 3</option>
                        </select>
                    </div>

                    <div className='flex my-5'>
                        <label className='w-32' htmlFor="multi-select">Multi Select:</label>
                        <select className='w-48' name="multi-select" id="multi-select" multiple>
                            <option value="mul-sel-1">Multi select Option 1</option>
                            <option value="mul-sel-2">Multi select Option 2</option>
                            <option value="mul-sel-3">Multi select Option 3</option>
                        </select>
                    </div>

                    <div className='flex my-5'>
                        <label className='w-32' htmlFor="checkbox">checkbox:</label>
                        <input type="checkbox" id="checkbox" name="checkbox"
                            defaultChecked={state.values?.checkbox}
                        >
                        </input>
                    </div>

                    <div className='flex my-5'>
                        <label className='w-32' htmlFor="radio1">Option 1:</label>
                        <input type="radio" id="radio1" name="radio" value="radio-1"
                            defaultChecked={state.values?.radio === 'radio-1'}
                        >
                        </input>
                    </div>
                    <div className='flex my-5'>
                        <label className='w-32' htmlFor="radio2">Option 2:</label>
                        <input type="radio" id="radio2" name="radio" value="radio-2"
                            defaultChecked={state.values?.radio === 'radio-2'}
                        >
                        </input>
                    </div>

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
                        Submit
                    </button>

                </div>
            </form>
        </div>
    )
}

export default DemoForm