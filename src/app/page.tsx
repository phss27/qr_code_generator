"use client";

import {QRCodeCanvas} from 'qrcode.react';
import { FaUpload } from "react-icons/fa";
import { useRef, useState } from "react";
import { useLogoUpload } from "@/hooks/useLogoUpload";
import { qrCodeDownload } from '@/hooks/qrCodeDownload';

export default function Home() {
  const [linkValue, setlinkValue] = useState<string>('');  
  const [fgColor, setfgColor] = useState<string>('#000');  
  const [bgColor, setbgColor] = useState<string>('#fff');  
  const { logoUrl, handleLogoChange } = useLogoUpload();  
  const qrCodeRef = useRef<HTMLDivElement>(null);

  return (
    <main className="container">
      <section className="title-container">
        <h1 className="page-title">
          Gere e customize 
          QR Codes <span>dinâmicos</span>
        </h1>
        <img 
          src="/arrow.svg" 
          alt="arrow-down" 
          className="arrow-detail"
        />
      </section>

      <section className="qr-code-container">
        <div className="qr-code">
          <div className="link-input">
            <label htmlFor="link">
              Digite seu link
            </label>
          </div>
          <input 
            type="text" 
            id="link" 
            placeholder="Seu link aqui" 
            value={linkValue}
            onChange={(e) => setlinkValue(e.target.value)}
          />

          <div className="qr-code-preview">
            <p>
                QR Code Preview
            </p>

            <div ref={qrCodeRef}>
                <QRCodeCanvas
                value={linkValue}
                title={linkValue}
                size={logoUrl ? 256 : 128}
                bgColor={bgColor}
                fgColor={fgColor}
                imageSettings={logoUrl ? {
                    src: logoUrl,
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    opacity: 1,
                    excavate: true,
                    crossOrigin: 'anonymous'
                } : undefined}
                />
            </div>
            
          </div>
        </div>

        <div className="qr-code-customization">
            <div className="customization-container">
                <h3>
                    Cores
                </h3>
                <div className="input-container colors">
                    <div className="input-box">
                        <label htmlFor="fgColor">
                            Cor principal
                        </label>
                        <input 
                            type="color" 
                            className="input-color"
                            id="fgColor" 
                            value={fgColor}
                            onChange={(e) => setfgColor(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor="bgColor">
                            Cor do fundo
                        </label>
                        <input 
                            type="color" 
                            className="input-color"
                            id="bgColor" 
                            value={bgColor}
                            onChange={(e) => setbgColor(e.target.value)}
                        />
                    </div>
                </div>
            </div>    

            <button className="download-button" 
                onClick={() => qrCodeDownload(qrCodeRef)}
            >
                Baixar QR Code    
            </button>          
        </div>
      </section>
    </main> 
  );
}
