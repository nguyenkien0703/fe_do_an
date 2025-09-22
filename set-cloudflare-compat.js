#!/usr/bin/env node

// Script to set nodejs_compat flag via Cloudflare API
// Usage: node set-cloudflare-compat.js <PROJECT_NAME> <API_TOKEN> <ACCOUNT_ID>

const PROJECT_NAME = process.argv[2] || 'fe-do-an';
const API_TOKEN = process.argv[3];
const ACCOUNT_ID = process.argv[4];

if (!API_TOKEN || !ACCOUNT_ID) {
  console.log('Usage: node set-cloudflare-compat.js <PROJECT_NAME> <API_TOKEN> <ACCOUNT_ID>');
  console.log('Example: node set-cloudflare-compat.js fe-do-an your_token your_account_id');
  process.exit(1);
}

async function setCompatibilityFlags() {
  try {
    // Get project info
    const projectResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}`,
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!projectResponse.ok) {
      const error = await projectResponse.text();
      console.error('Error getting project:', error);
      return;
    }

    const project = await projectResponse.json();
    console.log('✅ Project found:', project.result.name);

    // Update compatibility flags
    const updateResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          compatibility_flags: ['nodejs_compat'],
          compatibility_date: '2024-01-01'
        }),
      }
    );

    if (!updateResponse.ok) {
      const error = await updateResponse.text();
      console.error('Error updating project:', error);
      return;
    }

    const result = await updateResponse.json();
    console.log('🎉 Compatibility flags updated successfully!');
    console.log('Project:', result.result.name);
    console.log('Compatibility flags:', result.result.compatibility_flags);
    console.log('Compatibility date:', result.result.compatibility_date);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

setCompatibilityFlags();