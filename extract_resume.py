#!/usr/bin/env python3
"""
Script to extract text from PDF resume and format it for portfolio update
"""

import sys
import os

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using different methods"""
    text = ""
    
    # Try PyMuPDF first (most reliable)
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(pdf_path)
        for page in doc:
            text += page.get_text()
        doc.close()
        return text
    except ImportError:
        print("PyMuPDF not available, trying PyPDF2...")
    
    # Try PyPDF2 as fallback
    try:
        import PyPDF2
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text()
        return text
    except ImportError:
        print("PyPDF2 not available, trying pdfplumber...")
    
    # Try pdfplumber as another fallback
    try:
        import pdfplumber
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""
        return text
    except ImportError:
        print("No PDF libraries available. Please install one of: PyMuPDF, PyPDF2, or pdfplumber")
        return ""

def main():
    pdf_path = r"c:\Users\Evan\Downloads\EvanMcGarryResume.pdf"
    
    if not os.path.exists(pdf_path):
        print(f"Resume file not found: {pdf_path}")
        sys.exit(1)
    
    print("Extracting text from resume...")
    text = extract_text_from_pdf(pdf_path)
    
    if not text.strip():
        print("No text extracted from PDF. This might be a scanned document or protected PDF.")
        sys.exit(1)
    
    # Save extracted text to file
    output_path = "resume_text.txt"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)
    
    print(f"Resume text extracted and saved to: {output_path}")
    print("\nFirst 500 characters:")
    print("=" * 50)
    print(text[:500])
    print("=" * 50)
    
    return text

if __name__ == "__main__":
    main()