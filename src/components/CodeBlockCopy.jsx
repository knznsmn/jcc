'use client';

import { useEffect } from 'react';

export default function CodeBlockCopy() {
  useEffect(() => {
    const addCopyButtons = () => {
      // Select all pre elements and add copyable class + button
      const preElements = document.querySelectorAll('section[class*="__md"] pre');
      console.log('Found pre elements:', preElements.length);
      
      preElements.forEach((pre) => {
        // Add class to pre element
        pre.classList.add('code');
        
        // Skip if button already exists
        if (pre.querySelector('[data-copy-btn="true"]')) return;
        
        const button = document.createElement('button');
        button.setAttribute('data-copy-btn', 'true');
        button.innerHTML = '<i class="icon-copy"></i>';
        button.type = 'button';
        
        // Apply styles directly
        Object.assign(button.style, {
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          padding: '0.4rem 0.8rem',
          backgroundColor: '#f0f0f0',
          color: '#333',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: '500',
          zIndex: '1000',
          fontFamily: 'inherit',
          transition: 'all 0.2s ease',
        });
        
        button.addEventListener('click', async () => {
          const code = pre.querySelector('code');
          const text = (code?.textContent || '').trim();
          
          try {
            await navigator.clipboard.writeText(text);
            button.innerHTML = '✓';
            setTimeout(() => {
              button.innerHTML = '<i class="icon-copy"></i>';
            }, 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        });
        
        pre.style.position = 'relative';
        pre.appendChild(button);
      });
    };
    
    // Run on mount and after a short delay to ensure content is rendered
    addCopyButtons();
    const timer = setTimeout(addCopyButtons, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return null;
}
