#version 330

smooth in vec3 vertexColour;
smooth in vec3 vertexNormal;

uniform int useUniformColour;
uniform vec4 colour;

out vec4 oFragColor;

void main()
{
	if (useUniformColour > 0)
	{
		oFragColor = colour;
	}
	else
	{	
		vec3 lightDir = -normalize(vec3(1, 5, -5));
		float d = dot(vertexNormal, -lightDir);
		d = max(0.2, d);
		oFragColor = vec4(vertexColour, 1) * d;
	}
}
