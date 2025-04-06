document.addEventListener('DOMContentLoaded', function() {
    // Create progress circle for project status
    const completedCount = 18;
    const totalCount = 31;
    const percentage = (completedCount / totalCount) * 100;
    
    const progressCircle = document.getElementById('progress-circle');
    if (!progressCircle) return;
    
    // SVG dimensions
    const size = 180;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    
    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
    svg.classList.add('progress-circle');
    
    // Create background circle
    const bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle.setAttribute('cx', size / 2);
    bgCircle.setAttribute('cy', size / 2);
    bgCircle.setAttribute('r', radius);
    bgCircle.classList.add('progress-circle__bg');
    
    // Create progress circle
    const progressArc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    progressArc.setAttribute('cx', size / 2);
    progressArc.setAttribute('cy', size / 2);
    progressArc.setAttribute('r', radius);
    progressArc.classList.add('progress-circle__progress');
    progressArc.style.strokeDasharray = `${circumference} ${circumference}`;
    progressArc.style.strokeDashoffset = offset;
    
    // Create text for percentage
    const percentText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    percentText.setAttribute('x', size / 2);
    percentText.setAttribute('y', size / 2);
    percentText.classList.add('progress-circle__text');
    percentText.textContent = `${Math.round(percentage)}%`;
    
    // Create subtext
    const subText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    subText.setAttribute('x', size / 2);
    subText.setAttribute('y', size / 2);
    subText.classList.add('progress-circle__subtext');
    subText.textContent = '完成率';
    
    // Append all elements to SVG
    svg.appendChild(bgCircle);
    svg.appendChild(progressArc);
    svg.appendChild(percentText);
    svg.appendChild(subText);
    
    // Append SVG to container
    progressCircle.appendChild(svg);
    
    // Animate the progress circle on load
    setTimeout(() => {
        progressArc.style.strokeDashoffset = offset;
    }, 100);
});
