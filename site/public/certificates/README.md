# Certificates Directory

This directory should contain PDF certificate files that will be displayed in the product proof section.

## Required Certificate Files

Place the following PDF files in this directory:

1. `iso-9001-2015.pdf` - ISO 9001:2015 Quality Management System Certification
2. `quality-assurance.pdf` - Quality Assurance Certificate
3. `export-license.pdf` - Export License Certificate
4. `environmental-compliance.pdf` - Environmental Compliance Certificate

## File Naming

The certificate files must match the exact filenames listed above for the "View Certificate" buttons to work correctly.

## Adding New Certificates

To add more certificates:
1. Add the PDF file to this directory
2. Update the certificates grid in `site/pages/products/[productId].jsx`
3. Add a new certificate card with the appropriate file path
