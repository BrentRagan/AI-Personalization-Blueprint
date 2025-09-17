const TopicForm = (props) => { // IMPORTANT: Must be the first line
  // Styles (clean, neutral, responsive via prop)
  const containerStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '24px',
    backgroundColor: '#0b1220',
    color: '#e5e7eb',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
  };
  const inputSectionStyle = {
    margin: '0 auto',
    width: '100%',
    maxWidth: '720px',
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '10px',
    padding: '20px',
    boxSizing: 'border-box'
  }; // Limit input width for better readability
  const outputDivStyle = {
    margin: '20px auto 0',
    width: '100%',
    maxWidth: '720px',
    backgroundColor: '#0f172a',
    border: '1px solid #334155',
    borderRadius: '10px',
    padding: '20px',
    minHeight: '120px',
    wordWrap: 'break-word',
    boxSizing: 'border-box'
  }; // Limit output width, ensure text wraps
  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #475569',
    boxSizing: 'border-box',
    backgroundColor: '#0b1220',
    color: '#e5e7eb',
    outline: 'none'
  };
  const buttonStyle = {
    padding: '12px 18px',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: '1px solid #1d4ed8',
    cursor: 'pointer',
    marginTop: '10px'
  };
  const labelStyle = { display: 'block', marginBottom: '6px', fontWeight: 600, color: '#93c5fd' };
  const fieldGroupStyle = { marginBottom: '16px' };
  const errorStyle = { color: '#ef4444', fontSize: '0.875rem', display: 'block', marginTop: '6px' };
  const sliderWrapStyle = { display: 'flex', alignItems: 'center', gap: '10px' };
  const sliderValueStyle = { minWidth: '36px', textAlign: 'center', fontWeight: 600, color: '#22d3ee', background: 'rgba(34, 211, 238, 0.08)', borderRadius: '8px', padding: '6px 8px', border: '1px solid rgba(34, 211, 238, 0.2)' };

  // Responsive via prop (no window usage)
  const mobileStyles = {
    container: { padding: '10px 5px' },
    inputSection: { padding: '15px 10px', maxWidth: '95%' },
    outputDiv: { padding: '15px 10px', maxWidth: '95%' }
  };
  const isMobile = props.isMobile || false;
  if (isMobile) {
    Object.assign(containerStyle, mobileStyles.container);
    Object.assign(inputSectionStyle, mobileStyles.inputSection);
    Object.assign(outputDivStyle, mobileStyles.outputDiv);
  }

  // Option lists
  const industryOptions = [
    'Technology/Software','Healthcare & Medical','Finance & Banking','E-commerce & Retail',
    'Professional Services','Manufacturing','Real Estate','Education','Non-profit',
    'Marketing & Advertising','Consulting','Construction','Hospitality & Tourism',
    'Legal Services','Insurance','Automotive','Food & Beverage','Energy & Utilities',
    'Transportation & Logistics','Entertainment & Media','Other'
  ];
  const revenueOptions = [
    'Under $100K','$100K - $500K','$500K - $1M','$1M - $5M','$5M - $10M',
    '$10M - $25M','$25M - $50M','$50M+','Prefer not to say'
  ];
  const marketingBudgetOptions = [
    'Under $1K/month','$1K - $5K/month','$5K - $10K/month','$10K - $25K/month',
    '$25K - $50K/month','$50K - $100K/month','$100K+/month','No set marketing budget','Prefer not to say'
  ];
  const aiUsageOptions = [
    'No AI usage currently','Basic AI tools (ChatGPT, etc.)','Some marketing AI tools (email, social media)',
    'Advanced AI implementation (automation, analytics)','Fully integrated AI marketing stack'
  ];
  const employeeOptions = ['1-5','5-25','25-50','50-100','100-500','500-1000','1000+'];
  const implementationTimelineOptions = [
    'Immediately (within 30 days)','Within 3 months','Within 6 months','Within 12 months','Just researching for now'
  ];
  const challengeLabels = [
    'Challenge: Lead Generation',
    'Challenge: Content Creation',
    'Challenge: Social Media Management',
    'Challenge: Email Marketing',
    'Challenge: Analytics and Reporting',
    'Challenge: Marketing Automation',
    'Challenge: SEO and Search Marketing',
    'Challenge: Paid Advertising (Google, Facebook)',
    'Challenge: Converting Leads to Sales',
    'Challenge: Customer Retention',
    'Challenge: Brand Awareness',
    'Challenge: Website Traffic',
    'Challenge: Marketing Budget Management',
    'Challenge: Team Training and Skills',
    'Challenge: Marketing Technology Integration'
  ];
  const goalLabels = [
    'Goal: Increase Revenue',
    'Goal: Expand Market Reach',
    'Goal: Improve Efficiency',
    'Goal: Scale Operations',
    'Goal: Reduce Costs',
    'Goal: Improve Customer Experience',
    'Goal: Launch New Products or Services',
    'Goal: Enter New Markets',
    'Goal: Build Brand Recognition',
    'Goal: Improve Customer Retention',
    'Goal: Streamline Processes',
    'Goal: Increase Market Share'
  ];

  // Fields configuration (IDs equal to labels for consistency)
  const fields = [
    { id: 'Primary Website URL', label: 'Primary Website URL', type: 'url', required: true },
    { id: 'Business Goals', label: 'Business Goals', type: 'long-text', required: true },
    { id: 'Key Challenges Identified', label: 'Key Challenges Identified', type: 'long-text', required: true },
    { id: 'Experience Version', label: 'Experience Version', type: 'select', required: true, options: ['Version B','Version A'] },
    { id: 'Number of Recommendations', label: 'Number of Recommendations', type: 'slider', required: false, min: 3, max: 7 },
    { id: 'Additional URLs To Crawl (Optional)', label: 'Additional URLs To Crawl (Optional)', type: 'long-text', required: false },

    { id: 'First Name', label: 'First Name', type: 'text', required: true },
    { id: 'Last Name', label: 'Last Name', type: 'text', required: false },
    { id: 'Company Name', label: 'Company Name', type: 'text', required: false },
    { id: 'Email', label: 'Email', type: 'text', required: true },
    { id: 'Phone Number', label: 'Phone Number', type: 'text', required: false },

    { id: 'Industry or Business Type', label: 'Industry or Business Type', type: 'select', required: false, options: industryOptions },
    { id: 'Annual Revenue Range', label: 'Annual Revenue Range', type: 'select', required: false, options: revenueOptions },
    { id: 'Marketing Budget Range', label: 'Marketing Budget Range', type: 'select', required: false, options: marketingBudgetOptions },
    { id: 'Current AI Usage Level', label: 'Current AI Usage Level', type: 'select', required: false, options: aiUsageOptions },
    { id: 'Number of Employees', label: 'Number of Employees', type: 'select', required: false, options: employeeOptions },

    // Challenges (checkboxes)
    ...challengeLabels.map(l => ({ id: l, label: l, type: 'boolean', required: false })),
    // Goals (checkboxes)
    ...goalLabels.map(l => ({ id: l, label: l, type: 'boolean', required: false })),

    { id: 'Implementation Timeline', label: 'Implementation Timeline', type: 'select', required: false, options: implementationTimelineOptions }
  ];

  // Sanitization for visible text only (labels/options)
  const sanitizeText = (txt) => {
    if (typeof txt !== 'string') return txt;
    const fn = (typeof props.firstName === 'string' && props.firstName.trim().length > 0) ? props.firstName.trim() : '';
    let s = txt;
    try {
      s = s.replace(/Cyber-Seeker/gi, fn);
      s = s.replace(/👁‍🗨/g, fn);
      const terms = ['neon-lit','Neon','Cyberpunk','Quantum Cyber','Cyber'];
      for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        s = s.replace(new RegExp(esc, 'gi'), '');
      }
      s = s.replace(/\s{2,}/g, ' ').trim();
      s = s.replace(/\(\s*\)/g, '');
      s = s.replace(/\(\s+/g, '(').replace(/\s+\)/g, ')');
      s = s.replace(/\s+([,.;:!?)])/g, '$1').replace(/([([{])\s+/g, '$1');
    } catch (_) {
      return txt;
    }
    return s;
  };

  // State Hooks
  const initialValues = {};
  fields.forEach(f => {
    if (f.type === 'boolean') initialValues[f.id] = false;
    else if (f.type === 'slider') {
      const min = typeof f.min === 'number' ? f.min : 3;
      const max = typeof f.max === 'number' ? f.max : 7;
      initialValues[f.id] = Math.round((min + max) / 2);
    } else initialValues[f.id] = '';
  });
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // General submission errors

  // Validation (no .includes to avoid undefined errors)
  const validate = (vals) => {
    const errs = {};
    fields.forEach(f => {
      const v = vals[f.id];

      if (f.required) {
        const empty = (typeof v === 'string' && v.trim().length === 0) || v === null || v === undefined;
        if (empty) errs[f.id] = `${f.label} is required.`;
      }

      if (f.type === 'url' && typeof v === 'string' && v.trim().length > 0) {
        try {
          const u = new URL(v);
          if (u.protocol !== 'http:' && u.protocol !== 'https:') {
            errs[f.id] = 'Please enter a valid URL (http or https).';
          }
        } catch (_) {
          errs[f.id] = 'Please enter a valid URL (e.g., https://example.com).';
        }
      }

      if (f.id === 'Email' && typeof v === 'string' && v.trim().length > 0) {
        if (!/\S+@\S+\.\S+/.test(v)) errs[f.id] = 'Please enter a valid email address.';
      }

      if (f.type === 'slider') {
        const hasNum = v !== '' && v !== null && v !== undefined && Number.isNaN(Number(v)) === false;
        if (hasNum) {
          const num = Number(v);
          const min = typeof f.min === 'number' ? f.min : 3;
          const max = typeof f.max === 'number' ? f.max : 7;
          if (num < min || num > max) errs[f.id] = `Please choose a value between ${min} and ${max}.`;
        }
      }
    });
    return errs;
  };

  // Submission
  const handleSubmit = async (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);
    setError(null);
    try {
      const enrichedValues = {};
      fields.forEach(f => {
        enrichedValues[f.id] = { fieldId: f.id, value: values[f.id], label: f.label };
      });
      const result = await props.onSubmit(enrichedValues);
      if (typeof props.onResult === 'function') props.onResult(result);
    } catch (err) {
      const msg = (err && typeof err.message === 'string') ? err.message : 'An error occurred during submission.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  // Render (no JSX)
  return React.createElement(
    'div',
    { style: containerStyle },
    React.createElement(
      'form',
      { onSubmit: handleSubmit, style: inputSectionStyle, noValidate: true, autoComplete: 'off' },
      fields.map(f => {
        const errorId = `${f.id}-error`;
        const hasErr = !!errors[f.id];
        const baseStyle = hasErr ? { ...inputStyle, borderColor: '#ef4444' } : inputStyle;

        let control = null;
        if (f.type === 'select') {
          control = React.createElement(
            'select',
            {
              id: f.id,
              name: f.id,
              value: values[f.id] || '',
              onChange: (e) => setValues({ ...values, [f.id]: e.target.value }),
              style: baseStyle,
              'aria-describedby': hasErr ? errorId : undefined,
              'aria-invalid': hasErr ? 'true' : 'false',
              required: f.required
            },
            [
              React.createElement('option', { key: '', value: '' }, '-- Select --'),
              ...((f.options || []).map(opt => React.createElement('option', { key: opt, value: opt }, sanitizeText(opt))))
            ]
          );
        } else if (f.type === 'long-text') {
          control = React.createElement('textarea', {
            id: f.id,
            name: f.id,
            value: values[f.id] || '',
            onChange: (e) => setValues({ ...values, [f.id]: e.target.value }),
            style: { ...baseStyle, minHeight: '120px', resize: 'vertical', lineHeight: '1.4' },
            'aria-describedby': hasErr ? errorId : undefined,
            'aria-invalid': hasErr ? 'true' : 'false',
            required: f.required,
            rows: 6,
            placeholder: ''
          });
        } else if (f.type === 'slider') {
          const min = typeof f.min === 'number' ? f.min : 3;
          const max = typeof f.max === 'number' ? f.max : 7;
          const val = values[f.id];
          control = React.createElement(
            'div',
            { style: sliderWrapStyle },
            React.createElement('input', {
              id: f.id,
              name: f.id,
              type: 'range',
              min: min,
              max: max,
              step: 1,
              value: val,
              onChange: (e) => setValues({ ...values, [f.id]: e.target.value }),
              style: baseStyle,
              'aria-describedby': hasErr ? errorId : undefined,
              'aria-invalid': hasErr ? 'true' : 'false',
              required: f.required
            }),
            React.createElement('span', { style: sliderValueStyle }, `${val}`)
          );
        } else if (f.type === 'boolean') {
          control = React.createElement('input', {
            id: f.id,
            name: f.id,
            type: 'checkbox',
            checked: !!values[f.id],
            onChange: (e) => setValues({ ...values, [f.id]: e.target.checked }),
            style: { width: '18px', height: '18px' },
            'aria-describedby': hasErr ? errorId : undefined,
            'aria-invalid': hasErr ? 'true' : 'false'
          });
        } else {
          control = React.createElement('input', {
            id: f.id,
            name: f.id,
            type: f.type || 'text',
            value: values[f.id] || '',
            onChange: (e) => setValues({ ...values, [f.id]: e.target.value }),
            style: baseStyle,
            'aria-describedby': hasErr ? errorId : undefined,
            'aria-invalid': hasErr ? 'true' : 'false',
            required: f.required,
            placeholder: ''
          });
        }

        return React.createElement(
          'div',
          { key: f.id, style: fieldGroupStyle },
          React.createElement('label', { htmlFor: f.id, style: labelStyle }, sanitizeText(f.label)),
          control,
          hasErr && React.createElement('span', { id: errorId, style: errorStyle, role: 'alert' }, errors[f.id])
        );
      }),
      error && React.createElement('p', { style: errorStyle, role: 'alert' }, error),
      React.createElement('button', { type: 'submit', style: buttonStyle, disabled: loading }, loading ? 'Submitting...' : (props.submitButtonText || 'Submit'))
    ),
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
