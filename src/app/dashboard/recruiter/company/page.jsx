'use client'
import React, { useState } from 'react';

const RecruiterCompany = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        industry: 'Technology',
        websiteUrl: '',
        location: '',
        employeeCount: '1-10 employees',
        briefDescription: ''
    });
    const [logo, setLogo] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLogoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setLogo(e.target.files[0]);
        }
    };

    // আপনার নতুন async handleSubmit ফাংশনটি এখানে যোগ করা হয়েছে
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Form Data Submitted:', formData);

        try {
            // ব্যাকএন্ড এপিআই-তে ডেটা পাঠানো হচ্ছে
            const response = await fetch('http://localhost:5000/api/company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // লোগো ছাড়া বাকি ডেটা পাঠানো হচ্ছে
            });

            const data = await response.json();
            
            if (data.insertedId) {
                alert('Company registered successfully!');
                // ফর্ম রিসেট করার জন্য:
                setFormData({
                    companyName: '',
                    industry: 'Technology',
                    websiteUrl: '',
                    location: '',
                    employeeCount: '1-10 employees',
                    briefDescription: ''
                });
                setLogo(null); // লোগো স্টেটও রিসেট করে দেওয়া হলো
            } else {
                alert('Failed to register company.');
            }
        } catch (error) {
            console.error('Error connecting to backend:', error);
            alert('Something went wrong. Is your backend server running?');
        }
    };

    return (
        <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4 text-[#E2E8F0] font-sans">
            {/* Modal Container */}
            <div className="bg-[#1A1A1A] w-full max-w-2xl rounded-lg border border-[#2D2D2D] shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="flex justify-between items-start p-6 border-b border-[#2D2D2D]">
                    <div>
                        <h2 className="text-xl font-semibold text-white tracking-wide">Register New Company</h2>
                        <p className="text-xs text-gray-400 mt-1">Enter your business details to start hiring on HireLoop.</p>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                            <input 
                                type="text"
                                name="companyName"
                                placeholder="e.g. Acme Corp"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full bg-[#222222] border border-[#333333] rounded-md px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Industry / Category</label>
                            <div className="relative">
                                <select 
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full bg-[#222222] border border-[#333333] rounded-md px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-gray-500 transition-colors"
                                >
                                    <option value="Technology">Technology</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education">Education</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Website URL</label>
                            <div className="flex rounded-md border border-[#333333] overflow-hidden focus-within:border-gray-500 transition-colors">
                                <span className="bg-[#2A2A2A] text-gray-400 px-3 py-2.5 text-sm border-r border-[#333333] select-none">
                                    https://
                                </span>
                                <input 
                                    type="text"
                                    name="websiteUrl"
                                    placeholder="www.company.com"
                                    value={formData.websiteUrl}
                                    onChange={handleChange}
                                    className="w-full bg-[#222222] px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <input 
                                    type="text"
                                    name="location"
                                    placeholder="City, Country"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full bg-[#222222] border border-[#333333] rounded-md pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Employee Count Range</label>
                            <div className="relative">
                                <select 
                                    name="employeeCount"
                                    value={formData.employeeCount}
                                    onChange={handleChange}
                                    className="w-full bg-[#222222] border border-[#333333] rounded-md px-4 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-gray-500 transition-colors"
                                >
                                    <option value="1-10 employees">1-10 employees</option>
                                    <option value="11-50 employees">11-50 employees</option>
                                    <option value="51-200 employees">51-200 employees</option>
                                    <option value="201+ employees">201+ employees</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Company Logo</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex flex-col items-center justify-center w-14 h-14 bg-[#222222] border-2 border-dashed border-[#333333] rounded-md cursor-pointer hover:border-gray-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                                </label>
                                <div>
                                    <p className="text-sm font-medium text-gray-300">Upload image</p>
                                    <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Brief Description</label>
                        <textarea 
                            name="briefDescription"
                            rows="4"
                            placeholder="Tell us about your company's mission and culture..."
                            value={formData.briefDescription}
                            onChange={handleChange}
                            className="w-full bg-[#222222] border border-[#333333] rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                        ></textarea>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-end space-x-3 pt-4 border-t border-[#2D2D2D]">
                        <button 
                            type="button" 
                            className="px-5 py-2 text-sm font-medium text-gray-300 bg-transparent border border-[#333333] rounded-md hover:bg-[#222222] transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Register Company
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default RecruiterCompany;