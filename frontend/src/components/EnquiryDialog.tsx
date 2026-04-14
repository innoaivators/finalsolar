import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageSquare, Mail, Rocket, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

interface EnquiryDialogProps {
  productName: string;
  trigger?: React.ReactNode;
  className?: string;
}

const EnquiryDialog: React.FC<EnquiryDialogProps> = ({ productName, trigger, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'methods' | 'email_form' | 'success'>('methods');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const whatsappNumber = "+96598988281";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello, I would like to enquire about ${productName}.`
  )}`;

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        setView('methods');
        setErrorMsg('');
      }, 300); // reset state after close animation
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      productName,
      email: formData.get("email"),
    };

    try {
      // In production, you would point this to your actual deployed backend URL
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setView('success');
      } else {
        setErrorMsg(result.error?.message || result.error || "Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg("Network error. Could not connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <button className={className || "w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1"}>
            Enquire Now
          </button>
        )}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl border-gold/20 max-h-[90vh] overflow-y-auto">
        
        {view === 'methods' && (
          <>
            <DialogHeader className="items-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="text-gold" size={32} />
              </div>
              <DialogTitle className="text-2xl font-bold text-navy">Enquiry Method</DialogTitle>
              <DialogDescription className="text-center text-navy/60">
                How would you like to get in touch regarding <span className="text-gold font-semibold">{productName}</span>?
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border-2 border-green-100 bg-green-50/30 hover:bg-green-50 hover:border-green-400 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <MessageSquare size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-navy text-lg leading-tight group-hover:text-green-600 transition-colors">WhatsApp</h4>
                  <p className="text-sm text-navy/50">Instant message & quick response</p>
                </div>
              </a>

              <button
                onClick={() => setView('email_form')}
                className="flex items-center gap-4 p-4 rounded-2xl border-2 border-blue-100 bg-blue-50/30 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 group text-left"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-navy text-lg leading-tight group-hover:text-blue-600 transition-colors">Email Enquiry</h4>
                  <p className="text-sm text-navy/50">Send a detailed message directly</p>
                </div>
              </button>
            </div>
          </>
        )}

        {view === 'email_form' && (
          <form onSubmit={handleEmailSubmit} className="flex flex-col">
            <DialogHeader className="items-start relative">
              <button 
                type="button" 
                onClick={() => setView('methods')}
                className="absolute -top-2 -left-2 p-2 text-navy/50 hover:text-navy bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Back to methods"
              >
                <ArrowLeft size={18} />
              </button>
              <div className="w-full text-center mt-2">
                <DialogTitle className="text-xl font-bold text-navy">Send an Enquiry</DialogTitle>
                <DialogDescription className="text-center text-navy/60 mt-1">
                  Enquiring about <span className="font-semibold text-gold">{productName}</span>
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="grid gap-4 py-6">
              {errorMsg && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                  {errorMsg}
                </div>
              )}
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-navy ml-1">Your Email Address <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="email"
                  id="email"
                  name="email" 
                  placeholder="Enter your email so we can reply..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                />
                <p className="text-xs text-navy/50 ml-1 mt-2">We will reply to this email with the {productName} details.</p>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-navy/20 disabled:opacity-70 flex items-center justify-center gap-2 mt-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>Send Message</>
              )}
            </button>
          </form>
        )}

        {view === 'success' && (
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="text-green-500" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Enquiry Sent!</h3>
            <p className="text-navy/60 mb-8 max-w-[250px]">
              Thank you for your interest in {productName}. Our team will get back to you shortly.
            </p>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              Close Window
            </button>
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDialog;
