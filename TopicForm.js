const TopicForm = (props) => { // IMPORTANT: Must be the first line
  // Define styles as JS objects here (be creative and responsive)
  const containerStyle = { 
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: '#0b1220',
    color: '#e5e7eb',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
  };
  const inputSectionStyle = { 
    marginBottom: '20px',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '20px',
    boxSizing: 'border-box'
  }; // Limit input width for better readability
  const outputDivStyle = { 
    padding: '20px',
    border: '1px solid #334155',
    borderRadius: '8px',
    minHeight: '100px',
    marginTop: '20px',
    width: '100%',
    maxWidth: '600px',
    wordWrap: 'break-word',
    boxSizing: 'border-box',
    backgroundColor: '#0f172a'
  }; // Limit output width, ensure text wraps
  const inputStyle = { width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #475569', boxSizing: 'border-box', backgroundColor: '#0b1220', color: '#e5e7eb' };
  const buttonStyle = { padding: '10px 20px', fontSize: '1rem', borderRadius: '4px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '10px' };
  const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
  const fieldGroupStyle = { marginBottom: '15px' };
  const errorStyle = { color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '4px' };
  
  // IMPORTANT: For responsive styling, use fixed breakpoints with static values
  // DO NOT use window object to access screen width
  const mobileStyles = {
    container: { padding: '10px 5px' },
    inputSection: { padding: '15px 10px', maxWidth: '95%' },
    outputDiv: { padding: '15px 10px', maxWidth: '95%' }
  };
  
  // Here we apply mobile styles directly based on a prop
  // This avoids using window object which causes security issues
  const isMobile = props.isMobile || false;
  
  // Apply conditional styles based on isMobile prop
  if (isMobile) {
    Object.assign(containerStyle, mobileStyles.container);
    Object.assign(inputSectionStyle, mobileStyles.inputSection);
    Object.assign(outputDivStyle, mobileStyles.outputDiv);
  }

  // Normalize input fields
  const rawFields = [
    { "name": "Primary Website URL", "type": "url", "replacement": "Primary Website URL", "required": true, "options": [], "min": 0, "max": 0 },
    { "name": "Business Goals", "type": "long-text", "replacement": "Business Goals", "required": true, "options": [], "min": 0, "max": 0 },
    { "name": "Key Challenges Identified", "type": "long-text", "replacement": "Key Challenges Identified", "required": true, "options": [], "min": 0, "max": 0 },
    { "name": "Experience Version", "type": "select", "replacement": "Experience Version", "required": true, "options": ["Version B", "Version A"], "min": 0, "max": 0 },
    { "name": "Number of Recommendations", "type": "slider", "replacement": "Number of Recommendations", "required": false, "options": [], "min": 3, "max": 7 },
    { "name": "Additional URLs To Crawl (Optional)", "type": "long-text", "replacement": "Additional URLs To Crawl (Optional)", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "First Name", "type": "text", "replacement": "First Name", "required": true, "options": [], "min": 0, "max": 0 },
    { "name": "Last Name", "type": "text", "replacement": "Last Name", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Company Name", "type": "text", "replacement": "Company Name", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Email", "type": "text", "replacement": "Email", "required": true, "options": [], "min": 0, "max": 0 },
    { "name": "Phone Number", "type": "text", "replacement": "Phone Number", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Industry or Business Type", "type": "select", "replacement": "Industry or Business Type", "required": false, "options": ["Technology/Software","Healthcare & Medical","Finance & Banking","E-commerce & Retail","Professional Services","Manufacturing","Real Estate","Education","Non-profit","Marketing & Advertising","Consulting","Construction","Hospitality & Tourism","Legal Services","Insurance","Automotive","Food & Beverage","Energy & Utilities","Transportation & Logistics","Entertainment & Media","Other"], "min": 0, "max": 0 },
    { "name": "Annual Revenue Range", "type": "select", "replacement": "Annual Revenue Range", "required": false, "options": ["Under $100K","$100K - $500K","$500K - $1M","$1M - $5M","$5M - $10M","$10M - $25M","$25M - $50M","$50M+","Prefer not to say"], "min": 0, "max": 0 },
    { "name": "Marketing Budget Range", "type": "select", "replacement": "Marketing Budget Range", "required": false, "options": ["Under $1K/month","$1K - $5K/month","$5K - $10K/month","$10K - $25K/month","$25K - $50K/month","$50K - $100K/month","$100K+/month","No set marketing budget","Prefer not to say"], "min": 0, "max": 0 },
    { "name": "Current AI Usage Level", "type": "select", "replacement": "Current AI Usage Level", "required": false, "options": ["No AI usage currently","Basic AI tools (ChatGPT, etc.)","Some marketing AI tools (email, social media)","Advanced AI implementation (automation, analytics)","Fully integrated AI marketing stack"], "min": 0, "max": 0 },
    { "name": "Number of Employees", "type": "select", "replacement": "Number of Employees", "required": false, "options": ["1-5","5-25","25-50","50-100","100-500","500-1000","1000+"], "min": 0, "max": 0 },
    { "name": "Challenge: Lead Generation", "type": "boolean", "replacement": "Challenge: Lead Generation", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Content Creation", "type": "boolean", "replacement": "Challenge: Content Creation", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Social Media Management", "type": "boolean", "replacement": "Challenge: Social Media Management", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Email Marketing", "type": "boolean", "replacement": "Challenge: Email Marketing", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Analytics and Reporting", "type": "boolean", "replacement": "Challenge: Analytics and Reporting", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Marketing Automation", "type": "boolean", "replacement": "Challenge: Marketing Automation", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: SEO and Search Marketing", "type": "boolean", "replacement": "Challenge: SEO and Search Marketing", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Paid Advertising (Google, Facebook)", "type": "boolean", "replacement": "Challenge: Paid Advertising (Google, Facebook)", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Converting Leads to Sales", "type": "boolean", "replacement": "Challenge: Converting Leads to Sales", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Customer Retention", "type": "boolean", "replacement": "Challenge: Customer Retention", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Brand Awareness", "type": "boolean", "replacement": "Challenge: Brand Awareness", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Website Traffic", "type": "boolean", "replacement": "Challenge: Website Traffic", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Marketing Budget Management", "type": "boolean", "replacement": "Challenge: Marketing Budget Management", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Team Training and Skills", "type": "boolean", "replacement": "Challenge: Team Training and Skills", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Challenge: Marketing Technology Integration", "type": "boolean", "replacement": "Challenge: Marketing Technology Integration", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Increase Revenue", "type": "boolean", "replacement": "Goal: Increase Revenue", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Expand Market Reach", "type": "boolean", "replacement": "Goal: Expand Market Reach", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Improve Efficiency", "type": "boolean", "replacement": "Goal: Improve Efficiency", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Scale Operations", "type": "boolean", "replacement": "Goal: Scale Operations", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Reduce Costs", "type": "boolean", "replacement": "Goal: Reduce Costs", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Improve Customer Experience", "type": "boolean", "replacement": "Goal: Improve Customer Experience", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Launch New Products or Services", "type": "boolean", "replacement": "Goal: Launch New Products or Services", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Enter New Markets", "type": "boolean", "replacement": "Goal: Enter New Markets", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Build Brand Recognition", "type": "boolean", "replacement": "Goal: Build Brand Recognition", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Improve Customer Retention", "type": "boolean", "replacement": "Goal: Improve Customer Retention", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Streamline Processes", "type": "boolean", "replacement": "Goal: Streamline Processes", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Goal: Increase Market Share", "type": "boolean", "replacement": "Goal: Increase Market Share", "required": false, "options": [], "min": 0, "max": 0 },
    { "name": "Implementation Timeline", "type": "select", "replacement": "Implementation Timeline", "required": false, "options": ["Immediately (within 30 days)","Within 3 months","Within 6 months","Within 12 months","Just researching for now"], "min": 0, "max": 0 }
  ];
  const fields = rawFields.map(f => ({
    ...f,
    id: f.name,
    label: f.replacement || f.name
  }));

  // State Hooks (use useState directly, no 'React.' prefix)
  const initialValues = {};
  fields.forEach(field => {
    if (field.type === 'boolean') {
      initialValues[field.id] = field.defaultValue === true ? true : false;
    } else if (field.type === 'slider') {
      const min = typeof field.min === 'number' && field.min !== 0 ? field.min : 3;
      const max = typeof field.max === 'number' && field.max !== 0 ? field.max : 7;
      initialValues[field.id] = typeof field.defaultValue === 'number' ? field.defaultValue : Math.round((min + max) / 2);
    } else {
      initialValues[field.id] = field.defaultValue || '';
    }
  });
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // For general submission errors

  // Validation Function
  const validate = (vals) => {
    const errs = {};
    fields.forEach(field => {
      // Required check
      if (field.required) {
        const v = vals[field.id];
        const isEmptyString = typeof v === 'string' && v.trim().length === 0;
        const isEmptyBool = field.type === 'boolean' ? false : false; // booleans are never "required" here
        if ((v === null || v === undefined || isEmptyString) && !isEmptyBool) {
          errs[field.id] = `${field.label} is required.`;
          return;
        }
      }
      // Type validations
      if (field.type === 'url' && vals[field.id]) {
        try {
          const parsed = new URL(vals[field.id]);
          if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
            errs[field.id] = 'Please enter a valid URL (http or https).';
          }
        } catch (_) {
          errs[field.id] = 'Please enter a valid URL (e.g., https://example.com).';
        }
      }
      if ((field.type === 'text' || field.type === 'long-text') && typeof vals[field.id] === 'string') {
        if (field.id && String(field.id).toLowerCase().includes('email')) {
          if (vals[field.id].trim().length > 0 && !/\S+@\S+\.\S+/.test(vals[field.id])) {
            errs[field.id] = 'Please enter a valid email address.';
          }
        }
      }
      if (field.type === 'number' && vals[field.id] && isNaN(Number(vals[field.id]))) {
        errs[field.id] = 'Please enter a valid number.';
      }
      if (field.type === 'slider') {
        const v = vals[field.id];
        if (v !== '' && v !== null && v !== undefined && Number.isNaN(Number(v)) === false) {
          const num = Number(v);
          const min = typeof field.min === 'number' && field.min !== 0 ? field.min : 3;
          const max = typeof field.max === 'number' && field.max !== 0 ? field.max : 7;
          if (num < min || num > max) {
            errs[field.id] = `Please choose a value between ${min} and ${max}.`;
          }
        }
      }
    });
    return errs;
  };

  // Submission Handler
  const handleSubmit = async (e) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);
    setError(null); // Clear previous general errors
    
    try {
      const enrichedValues = {};
      fields.forEach(field => {
        enrichedValues[field.id] = {
          fieldId: field.id,
          value: values[field.id],
          label: field.label
        };
      });

      const result = await props.onSubmit(enrichedValues);
      
      // Call onResult if provided
      if (typeof props.onResult === 'function') {
        props.onResult(result);
      }
      
    } catch (err) {
      const errorMessage = (err && typeof err.message === 'string') ? err.message : "An error occurred during submission.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // UI Rendering (Use React.createElement, NO JSX)
  return React.createElement(
    'div', // Main container
    { style: containerStyle },
    React.createElement(
      'form', // Input section
      { 
        onSubmit: handleSubmit, 
        style: inputSectionStyle, 
        noValidate: true,
        autoComplete: 'off'
      },
      // Map inputFields to create labels and inputs
      fields.map(field => {
        // Create error ID safely with template literals
        const errorId = `${field.id}-error`;
        
        const hasError = !!errors[field.id];
        const baseInputStyle = hasError ? { ...inputStyle, borderColor: 'red' } : inputStyle;

        let control = null;

        if (field.type === 'select') {
          control = React.createElement(
            'select',
            {
              id: field.id,
              name: field.id,
              value: values[field.id] || '',
              onChange: (e) => setValues({ ...values, [field.id]: e.target.value }),
              style: baseInputStyle,
              'aria-describedby': hasError ? errorId : undefined,
              'aria-invalid': hasError ? 'true' : 'false',
              required: field.required
            },
            [
              React.createElement('option', { key: "", value: "" }, "-- Select --"),
              ...(field.options || []).map(opt =>
                React.createElement('option', { key: opt, value: opt }, opt)
              )
            ]
          );
        } else if (field.type === 'long-text') {
          control = React.createElement(
            'textarea',
            {
              id: field.id,
              name: field.id,
              value: values[field.id] || '',
              onChange: (e) => setValues({ ...values, [field.id]: e.target.value }),
              style: { ...baseInputStyle, minHeight: '120px', resize: 'vertical' },
              'aria-describedby': hasError ? errorId : undefined,
              'aria-invalid': hasError ? 'true' : 'false',
              required: field.required,
              rows: 6,
              placeholder: ''
            }
          );
        } else if (field.type === 'slider') {
          const min = typeof field.min === 'number' && field.min !== 0 ? field.min : 3;
          const max = typeof field.max === 'number' && field.max !== 0 ? field.max : 7;
          const sliderValue = values[field.id] !== '' && values[field.id] !== undefined && values[field.id] !== null
            ? values[field.id]
            : Math.round((min + max) / 2);
          control = React.createElement('input', {
            id: field.id,
            name: field.id,
            type: 'range',
            min: min,
            max: max,
            step: 1,
            value: sliderValue,
            onChange: (e) => setValues({ ...values, [field.id]: e.target.value }),
            style: baseInputStyle,
            'aria-describedby': hasError ? errorId : undefined,
            'aria-invalid': hasError ? 'true' : 'false',
            required: field.required
          });
        } else if (field.type === 'boolean') {
          control = React.createElement('input', {
            id: field.id,
            name: field.id,
            type: 'checkbox',
            checked: !!values[field.id],
            onChange: (e) => setValues({ ...values, [field.id]: e.target.checked }),
            style: { width: '20px', height: '20px' },
            'aria-describedby': hasError ? errorId : undefined,
            'aria-invalid': hasError ? 'true' : 'false'
          });
        } else {
          control = React.createElement('input', {
            id: field.id,
            name: field.id,
            type: field.type || 'text',
            value: values[field.id] || '',
            onChange: (e) => setValues({ ...values, [field.id]: e.target.value }),
            style: baseInputStyle,
            'aria-describedby': hasError ? errorId : undefined,
            'aria-invalid': hasError ? 'true' : 'false',
            required: field.required,
            placeholder: ''
          });
        }
        
        return React.createElement(
          'div', // Field group container
          { key: field.id, style: fieldGroupStyle },
          React.createElement('label', { htmlFor: field.id, style: labelStyle }, field.label),
          control,
          hasError && React.createElement(
            'span', // Error message
            { id: errorId, style: errorStyle, role: 'alert' },
            errors[field.id]
          )
        );
      }),
      // General submission error display
      error && React.createElement('p', { style: errorStyle, role: 'alert' }, error),
      // Submit Button
      React.createElement(
        'button',
        { type: 'submit', style: buttonStyle, disabled: loading },
        loading ? 'Submitting...' : (props.submitButtonText || 'Submit') // Allow custom button text via prop
      )
    ),
    // Output Section - preserve the props approach for results display
    React.createElement(
      'div',
      { id: 'output-div', style: outputDivStyle },
      props.resultsFetching
        ? props.fetchingLoader
        : (props.selectedResult
            ? props.selectedResult
            : 'Results will appear here...')
    )
  );
};
