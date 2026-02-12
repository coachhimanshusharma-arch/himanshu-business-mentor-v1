/**
 * Form submission utility for lead capture
 * Submits to Google Sheets via Apps Script Web App
 * 
 * SETUP: 
 * 1. Create a Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code in Apps Script:
 * 
 *   function doPost(e) {
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *     sheet.appendRow([
 *       new Date(),
 *       data.name || '',
 *       data.situation || '',
 *       data.industry || '',
 *       data.whatsapp || '',
 *       data.email || '',
 *       data.source || '',
 *     ]);
 *     return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * 
 * 4. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 5. Copy the URL and paste below
 */

// ⚠️ REPLACE THIS with your Google Apps Script Web App URL
const FORM_ENDPOINT = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

// ⚠️ REPLACE THIS with Himanshu's real WhatsApp number (with country code, no +)
export const WHATSAPP_NUMBER = '919876543210'; // TODO: Replace with real number

export interface LeadData {
    name?: string;
    age?: string;
    profession?: string;
    situation?: string;
    industry?: string;
    whatsapp?: string;
    email?: string;
    source: string; // e.g. 'multi-step-form', 'quiz', 'exit-intent'
}

export async function submitLead(data: LeadData): Promise<boolean> {
    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors', // Google Apps Script requires no-cors
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toISOString(),
            }),
        });

        // no-cors mode always returns opaque response, so we assume success
        return true;
    } catch (error) {
        console.error('Lead submission failed:', error);
        return false;
    }
}
