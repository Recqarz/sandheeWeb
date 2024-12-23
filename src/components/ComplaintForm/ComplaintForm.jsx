import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoAttachOutline } from "react-icons/io5";
import styled from "styled-components";

const ComplaintForm = () => {
      const [description, setDescription] = useState("");
      const [file, setFile] = useState(null);
      const [category, setCategory] = useState("");
      const [isFocused, setIsFocused] = useState(false);

      // Error states
      const [descriptionError, setDescriptionError] = useState("");
      const [categoryError, setCategoryError] = useState("");
      const [fileError, setFileError] = useState("");

      const handleFocus = () => setIsFocused(true);
      const handleBlur = () => setIsFocused(false);

      const handleCategoryChange = (e) => {
            setCategory(e.target.value);
            setCategoryError(""); // Clear error on valid input
      };

      const handleFileChange = (e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile) {
                  const fileSizeMB = selectedFile.size / (1024 * 1024);
                  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

                  if (!allowedTypes.includes(selectedFile.type)) {
                        setFileError("Invalid file type. Only JPEG, PNG, and PDF files are allowed.");
                        return;
                  }

                  if (fileSizeMB > 5) {
                        setFileError("File size should not exceed 5MB.");
                        return;
                  }

                  setFile(selectedFile);
                  setFileError(""); // Clear error on valid input
            }
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            let hasError = false;

            if (!description.trim()) {
                  setDescriptionError("Description is required.");
                  hasError = true;

            } else {
                  setDescriptionError("");
            }



            if (!category) {
                  setCategoryError("Please select a category.");
                  hasError = true;
            } else {
                  setCategoryError("");
            }

            if (!file) {
                  setFileError("Please attach a proof file.");
                  hasError = true;
            } else {
                  setFileError("");
            }

            if (hasError) return;

            console.log("Complaint Details:");
            console.log({
                  description,
                  category,
                  fileName: file.name,
                  fileType: file.type,
                  fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
            });

            setDescription("");
            setCategory("");
            setFile(null);
            alert("Form submitted successfully!");
      };

      const handleDescriptionChange = (e) => {
            const value = e.target.value;
            setDescription(value);

            if (!value.trim()) {
                  setDescriptionError("Description is required.");
            } else {
                  setDescriptionError(""); // Clear error if there's valid input
            }
      };

      return (
            <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-stone-300 complaint">
                  <div className="bg-[#CB935D] max-w-[640px] w-full h-full 2xl:max-w-[640px] 2xl:h-[1080px] overflow-hidden px-4 py-4 2xl:py-20 sm:px-6 md:px-10">
                        <div className="flex items-start mb-6 pt-2">
                              <h2 className="text-[20px] leading-[24.2px] font-[600] font-[Inter]">Step 2:</h2>
                              <h3 className="text-[20px] leading-[24.2px] font-[600] font-[Inter] ml-[80px] 2xl:ml-[80px]">
                                    Complaint Details
                              </h3>
                        </div>

                        <form onSubmit={handleSubmit}>
                              {/* Description */}
                              <FormGroup>
                                    <Label htmlFor="description">Description*</Label>
                                    <textarea
                                          id="description"
                                          className="w-full max-w-[541px] h-[322px] font-normal text-[#000] text-[1rem] bg-[#FFFFFF] rounded-[17px] pl-5 py-4 focus:outline-none placeholder:text-[#343434]"
                                          placeholder="Describe your complaint..."
                                          value={description}
                                          onChange={handleDescriptionChange}
                                    />
                                    {descriptionError && <ErrorMessage>{descriptionError}</ErrorMessage>}
                              </FormGroup>

                              {/* Category */}
                              <FormGroup>
                                    <Label htmlFor="category">Category*</Label>
                                    <div className="relative">
                                          <select
                                                id="category"
                                                className="appearance-none w-full max-w-[541px] h-[60px] px-5 text-[#343434] focus:outline-none rounded-[17px]"
                                                value={category}
                                                onChange={handleCategoryChange}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                          >
                                                <option value="">Select One</option>
                                                <option value="category1">Category 1</option>
                                                <option value="category2">Category 2</option>
                                                <option value="category3">Category 3</option>
                                          </select>
                                          {categoryError && <ErrorMessage>{categoryError}</ErrorMessage>}
                                    </div>
                              </FormGroup>

                              {/* File Upload */}
                              <FormGroup>
                                    <Label htmlFor="file">Attach Proof*</Label>
                                    <div className="flex justify-between w-full max-w-[541px] h-[60px] items-center mt-2 p-3 bg-white rounded-[17px]">
                                          <span className="text-[8px] text-[#343434]">
                                                Only jpeg, png, jpg, pdf files are allowed (up to 5MB).
                                          </span>
                                          <label htmlFor="file" className="text-gray-500 text-2xl cursor-pointer">
                                                <IoAttachOutline />
                                          </label>
                                          <input
                                                type="file"
                                                id="file"
                                                name="file"
                                                className="hidden"
                                                accept="image/jpeg, image/png, application/pdf"
                                                onChange={handleFileChange}
                                          />
                                    </div>
                                    {fileError && <ErrorMessage>{fileError}</ErrorMessage>}
                              </FormGroup>

                              {/* Buttons */}
                              <div className="flex justify-between mt-6">
                                    <Button type="button" variant="secondary" onClick={() => alert("Go back")}>
                                          Back
                                    </Button>
                                    <Button type="submit">Next</Button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};
export default ComplaintForm;

/* Styled Components */
const Label = styled.label`
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #343434;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  background-color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #333;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled.button`
   width: 181px;
height: 74px;
border-radius: 17px ;
opacity: 0px;
background-color:#CB935D;
font-family: "Inter";
font-size: 20px;
font-weight: 400;
line-height: 24.2px;
text-align: center;
  outline: none;
  
text-underline-position: from-font;
text-decoration-skip-ink: none;
  color: ${(props) => (props.variant === "secondary" ? "#333" : "#fff")};
  background-color: ${(props) =>
            props.variant === "secondary" ? "#f0f0f0" : "#000"};
 
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 60px; 
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  max-width:541px;
  weight:100%;
`;


const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.25rem;
  font-weight:600;
  display: block;
`;
